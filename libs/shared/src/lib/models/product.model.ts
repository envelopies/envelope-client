// export interface IProduct {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   createdAt: string;
//   username: string;
//   category: string;
// }

import { IProduct } from '../interfaces/product.interface';

export class ProductModel {
  public readonly id: string;
  public readonly title: string;
  public readonly description: string;
  public readonly price: number;
  public readonly createdAt: string;
  public readonly username: string;
  public readonly category: string;
  public readonly photoUrl: string;

  constructor(product: IProduct) {
    this.id = product.id;
    this.title = product.title;
    this.description = product.description;
    this.price = product.price;
    this.createdAt = product.createdAt;
    this.username = product.username;
    this.category = product.category;
    this.photoUrl = product.photoUrl;
  }
}
