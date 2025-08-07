export interface ICouponRequestBody {
  amount: number;
  noOfCoupans: number;
}

export interface ICouponList {
  _id: string;
  amount: number;
  code: string;
  createdAt: string;
  expiresAt?: string;
  qr: string;
  status?: string;
}
