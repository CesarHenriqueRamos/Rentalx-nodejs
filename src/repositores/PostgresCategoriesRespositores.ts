import { Category } from "../model/Category";
import { ICategoryRepositores, ICreateCategoryDTO } from "./ICategoriesRepositores";

class PostgresCategoriesRepositores implements ICategoryRepositores {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({name, description}:ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export {PostgresCategoriesRepositores}