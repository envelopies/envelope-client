import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { ProductModel } from '@store/shared';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'lib-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, ButtonDirective, ButtonIcon, ButtonLabel],
})
export class ProductCardComponent {
  @Input({
    required: true,
  })
  public product!: ProductModel;
}
