import CRUDService from "./CRUD.service";

export interface Category {
  id: number;
  name: string;
  image: string;
  selected: boolean;
}

export default class CategoryService extends CRUDService<Category> {
  constructor() {
    super("categories");
  }
}
