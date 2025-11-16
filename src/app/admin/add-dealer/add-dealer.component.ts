import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.scss'],
})
export class AddDealerComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  dealerForm!: FormGroup;
  errorMsg: string = '';
  userTypes = [
    { label: 'Dealer', value: 'Dealer' },
    { label: 'Admin', value: 'Admin' },
  ];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    this.dealerForm = this.fb.group({
      userType: ['Dealer', Validators.required],
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      shop: ['', Validators.required],
      address: ['', Validators.required],
      pin: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.dealerForm.invalid) return;

    this.subscription.add(
      this.adminService.addDealer(this.dealerForm.value).subscribe((resp) => {
        if (resp?.status) {
          this.router.navigate(['/admin']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
