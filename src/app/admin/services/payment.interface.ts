export interface IPaymentRequest {
  id: number;
  amount: number;
  userId: number;
  transactionDate: string;
  debited: number;
  status: string;
}
