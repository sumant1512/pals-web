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
      name: ['Chetan Kulchania', Validators.required],
      mobile: [
        '9111097770',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      shop: ['Om Building materials', Validators.required],
      address: ['Infront of govt bima, Ujjain Road', Validators.required],
      pin: ['455001', Validators.required],
      city: ['Dewas', Validators.required],
      state: ['Madhya Pradesh', Validators.required],
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
