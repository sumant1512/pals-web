export interface IPackSize {
  mrp: number | string;
  size: string;
  discount: number;
}

export interface IProductRequestBody {
  productName: string;
  productType: string;
  shortDescription: string;
  image: string;
  packSize: IPackSize[];
}
