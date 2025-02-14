import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CategoryModel, environment, ICategory } from '@store/shared';

@Injectable()
export class CategoryService {
  private readonly http: HttpClient = inject(HttpClient);

  public getCategories(): Observable<CategoryModel[]> {
    return this.http
      .get<ICategory[]>(`${environment.apiUrl}/categories`)
      .pipe(
        map((categories: ICategory[]) =>
          categories.map((category) => new CategoryModel(category)),
        ),
      );
  }
}
