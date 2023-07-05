import { inject, injectable } from "tsyringe"
import { Category } from "../../entities/Category"
import { ICategoryRepositores } from "../../repositores/ICategoriesRepositores"

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoresRepositores:ICategoryRepositores){}
  async execute(): Promise<Category[]>{
    const categories = await this.categoresRepositores.list()
    return categories
  }
}

export {ListCategoriesUseCase}