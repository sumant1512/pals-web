import { count } from 'rxjs';
import { EUserType } from './admin.enum';

export interface IAddDealerRequestBody {
  userType: EUserType;
  name: string;
  mobile: string;
  shop: string;
  address: string;
  pin: string;
  city: string;
  state: string;
}

export interface IDealderListResponse {
  count: number;
  status: string;
  message: string;
  dealers: IDealerList[];
}

export interface IDealerList {
  _id: string;
  name: string;
  mobile: string;
  shop: string;
  address: string;
  pin: string;
  city: string;
  state: string;
  userType: EUserType;
  availableCredit: number;
  lockedCredit: number;
  totalCredit: number;
  totalDebit: number;
  timestamp: string;
}
