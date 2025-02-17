import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductModel } from '@store/shared';
import { AsyncPipe } from '@angular/common';
import { Card } from 'primeng/card';
import { DataView } from 'primeng/dataview';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  standalone: true,
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, Card, DataView, ProductCardComponent],
})
export class ProductListComponent {
  @Input({
    required: true,
  })
  public products!: ProductModel[];
}
