export interface IPacket {
  _id?: string;
  size: string;
  mrp: number;
  discount: number;
}

export interface IProduct {
  _id?: string;
  productName: string;
  productType: string;
  image: string;
  largeImage: string;
  thumbnail: string;
  shortDescription: string;
  longDescription: string;
  packSize?: Array<IPacket>;
  price?: string;
  isShadeEnabled?: boolean;
  updatedAt?: string;
  createdAt?: string;
  __v?: number;
  priceStartingFrom?: number;
}
