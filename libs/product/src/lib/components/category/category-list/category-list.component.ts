import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoryModel } from '@store/shared';
import { Carousel } from 'primeng/carousel';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { PrimeTemplate } from 'primeng/api';
import { CategoryService } from '../../../services/category.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'lib-product-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  imports: [Carousel, CategoryCardComponent, PrimeTemplate, AsyncPipe],
  providers: [CategoryService],
})
export class CategoryListComponent implements OnInit {
  private readonly categoryService: CategoryService = inject(CategoryService);

  public categories$!: Observable<CategoryModel[]>;

  public responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  public ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }
}
