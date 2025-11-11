import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private isBrowser: boolean;
  private isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

  setItem(key: string, value: string, days = 1): void {
    if (this.isBrowser) {
      sessionStorage.setItem(key, value);
      this.setCookie(key, value, days);
    }
    // Server-side: do nothing (or use a server cookie lib if needed)
  }

  getItem(key: string): string | null {
    if (this.isBrowser) {
      const fromSession = sessionStorage.getItem(key);
      if (fromSession) return fromSession;
      return this.getCookie(key);
    }

    // SSR-safe: return null instead of accessing document.cookie
    return null;
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      sessionStorage.removeItem(key);
      this.deleteCookie(key);
    }
  }

  clearAll(): void {
    if (this.isBrowser) {
      sessionStorage.clear();
      this.clearCookies();
    }
  }

  /** --- Cookie helpers --- */
  private setCookie(name: string, value: string, days: number): void {
    if (!this.isBrowser) return; // ❗ SSR Guard

    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    this.document.cookie = `${name}=${encodeURIComponent(
      value
    )}; ${expires}; path=/; SameSite=Strict`;
  }

  private getCookie(name: string): string | null {
    if (!this.isBrowser) return null; // ❗ SSR Guard

    const match = this.document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    return match ? decodeURIComponent(match[2]) : null;
  }

  private deleteCookie(name: string): void {
    if (!this.isBrowser) return; // ❗ SSR Guard

    this.document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Strict`;
  }

  private clearCookies(): void {
    if (!this.isBrowser) return; // ❗ SSR Guard

    const cookies = this.document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      this.deleteCookie(name);
    }
  }
}
