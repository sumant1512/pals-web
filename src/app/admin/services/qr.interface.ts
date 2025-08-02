export interface IQrRequestBody {
  amount: number;
  noOfCoupans: number;
}

export interface IQrList {
  _id: string;
  amount: number;
  code: string;
  createdAt: string;
  expiresAt?: string;
  qr: string;
  status?: string;
}
