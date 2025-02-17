import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IProduct, ProductModel } from '@store/shared';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public getPopularProducts(): Observable<ProductModel[]> {
    return of(
      [
        {
          id: '0',
          title: 'Adrenaline Rush',
          description: 'Адреналин',
          price: 100,
          createdAt: '0',
          username: 'litovkin',
          category: '0',
          photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-b/c600/6539418935.jpg',
        },
        {
          id: '1',
          title: 'Adrenaline Rush',
          description: 'Адреналин',
          price: 100,
          createdAt: '0',
          username: 'litovkin',
          category: '0',
          photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-b/c600/6539418935.jpg',
        },
        {
          id: '2',
          title: 'Adrenaline Rush',
          description: 'Адреналин',
          price: 100,
          createdAt: '0',
          username: 'litovkin',
          category: '0',
          photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-b/c600/6539418935.jpg',
        },
        {
          id: '3',
          title: 'Adrenaline Rush',
          description: 'Адреналин',
          price: 100,
          createdAt: '0',
          username: 'litovkin',
          category: '0',
          photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-b/c600/6539418935.jpg',
        },
        {
          id: '3',
          title: 'Adrenaline Rush',
          description: 'Адреналин',
          price: 100,
          createdAt: '0',
          username: 'litovkin',
          category: '0',
          photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-b/c600/6539418935.jpg',
        },
        {
          id: '3',
          title: 'Adrenaline Rush',
          description: 'Адреналин',
          price: 100,
          createdAt: '0',
          username: 'litovkin',
          category: '0',
          photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-b/c600/6539418935.jpg',
        },
      ].map((product: IProduct) => new ProductModel(product)),
    );
  }
}
