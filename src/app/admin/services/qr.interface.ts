export interface IQrRequestBody {
  amount: number;
  noOfCoupans: number;
}

export interface IQrList {
  amount: number;
  code: string;
  createdOn: string;
  id: number;
  redemmedOn?: string;
  status: string;
  userId?: number;
}
