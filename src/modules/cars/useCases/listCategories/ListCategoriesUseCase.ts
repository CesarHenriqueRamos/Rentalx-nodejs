import { inject, injectable } from "tsyringe"

import { ICategoryRepositores } from "@modules/cars/repositores/ICategoriesRepositores"
import { Category } from "@modules/cars/infra/typeorm/entities/Category"

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