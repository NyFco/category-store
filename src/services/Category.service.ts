import { CRUDService } from "./CRUD.service";

export interface Category {
  id: number;
  name: string;
  image: string;
}

export default class CategoryService extends CRUDService<Category> {
  constructor() {
    super("categories");
  }
}
