import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CategoryModel } from '@store/shared';

@Component({
  standalone: true,
  selector: 'lib-product-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input({
    required: true,
  })
  public category!: CategoryModel;
}
