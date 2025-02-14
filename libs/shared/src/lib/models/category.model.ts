import { ICategory } from '../interfaces/category.interface';

export class CategoryModel {
  public readonly id: string;
  public readonly title: string;
  public readonly parentCategoryId: string;
  public readonly iconUrl: string;

  constructor(category: ICategory) {
    this.id = category.id;
    this.title = category.title;
    this.parentCategoryId = category.parentCategoryStringId;
    this.iconUrl = category.iconUrl;
  }
}
