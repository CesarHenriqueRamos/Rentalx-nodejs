import { inject, injectable } from "tsyringe"
import { Category } from "@modules/cars/entities/Category"
import { ICategoryRepositores } from "@modules/cars/repositores/ICategoriesRepositores"

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