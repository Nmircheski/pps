import { Injectable } from '@angular/core';
import { products } from '../data/products';
import { IProduct } from '../models/models';

@Injectable()
export class ProductsService {
  private productsList = products;

  constructor() {}

  public getProduct(id: string): IProduct | undefined {
    const product = this.productsList.find((p) => p.id === id);

    return product;
  }
}
