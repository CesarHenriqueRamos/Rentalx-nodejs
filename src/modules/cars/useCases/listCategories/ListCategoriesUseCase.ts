import { Category } from "../../model/Category"
import { ICategoryRepositores } from "../../repositores/ICategoriesRepositores"

class ListCategoriesUseCase {
  constructor(private categoresRepositores:ICategoryRepositores){}
  execute(): Category[]{
    const categories = this.categoresRepositores.list()
    return categories
  }
}

export {ListCategoriesUseCase}