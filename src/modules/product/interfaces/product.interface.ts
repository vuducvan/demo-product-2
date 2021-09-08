export interface IProduct {
  code: string;

  name: string;

  barcode: string;

  description: string;

  imageUrl: string;

  price: number;

  mfg: Date;

  status: string;

  isDelete: number;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string;
}
