export interface IPacket {
  size: string;
  mrp: string;
  discount: string;
}

export interface IProduct {
  productId: number;
  productName: string;
  productType: string;
  img: string;
  packSize: Array<IPacket>;
  pigmentPrice: string;
  isShadeEnabled: boolean;
}
