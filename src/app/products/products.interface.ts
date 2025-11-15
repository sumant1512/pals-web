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
  largeImage: string;
  thumbnail: string;
  shortDescription: string;
  longDescription: string;
  packSize?: Array<IPacket>;
  price: string;
  isShadeEnabled: boolean;
  priceStartingFrom?: string;
}
