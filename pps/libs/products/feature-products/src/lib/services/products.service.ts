import { Injectable } from '@angular/core';
import { IProduct } from '../models/models';
import { products } from '../static/data/products';

@Injectable()
export class ProductsService {
  private productsList = products;

  constructor() {}

  public getProduct(id: string): IProduct | undefined {
    const product = this.productsList.find((p) => p.id === id);

    return product;
  }
}
