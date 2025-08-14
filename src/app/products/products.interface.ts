export interface IPacket {
  size: string;
  mrp: string;
  discount: string;
}

export interface IProduct {
  _id: number;
  productName: string;
  productType: string;
  image: string;
  packSize?: Array<IPacket>;
  price: string;
  isShadeEnabled: boolean;
}
