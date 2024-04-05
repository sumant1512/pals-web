export interface IPacket {
  size: string;
  mrp: string;
  discount: string;
}

export interface IProduct {
  id: number;
  name: string;
  type: string;
  imgName: string;
  packetSize: Array<IPacket>;
  pigmentPrice: string;
  isShadeEnabled: boolean;
}
