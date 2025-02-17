import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FooterComponent,
  HeaderComponent,
  HeroComponent,
  IUser,
  ProductModel,
} from '@store/shared';
import { CategoryListComponent, ProductService } from '@store/product';
import { Observable } from 'rxjs';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { AsyncPipe, NgForOf } from '@angular/common';
import { DataView } from 'primeng/dataview';
import { ProductListComponent } from '../../../../../product/src/lib/components/product/product-list/product-list.component';

@Component({
  standalone: true,
  selector: 'lib-shared-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    CategoryListComponent,
    FooterComponent,
    Card,
    Button,
    AsyncPipe,
    DataView,
    NgForOf,
    ProductListComponent,
  ],
})
export class MainLayoutComponent implements OnInit {
  private readonly productService: ProductService = inject(ProductService);

  public products$!: Observable<ProductModel[]>;

  public sellers: IUser[] = [
    {
      id: 0,
      username: 'литовкин',
      verified: true,
      roles: [],
    },
    {
      id: 1,
      username: 'GHETTO SHOP',
      verified: true,
      roles: [],
    },
    {
      id: 2,
      username: 'Барыга',
      verified: true,
      roles: [],
    },
    {
      id: 3,
      username: '625 Егор',
      verified: true,
      roles: [],
    },
    {
      id: 4,
      username: 'МаксШаверма',
      verified: true,
      roles: [],
    },
  ];

  public ngOnInit(): void {
    this.products$ = this.productService.getPopularProducts();
  }
}
