import { inject, injectable } from "tsyringe";
import { ICategoryRepositores } from "@modules/cars/repositores/ICategoriesRepositores";
import { AppError } from "@errors/AppError";

interface IRequest {
  name:string;
  description:string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoresRepositores:ICategoryRepositores){}
  async execute({name,description}:IRequest): Promise<void>{
    const categoryAlreadExists = await this.categoresRepositores.findByName(name)
  if(categoryAlreadExists){
    throw new AppError('Category already exists')
  }
    await this.categoresRepositores.create({name, description})
  }
}

export {CreateCategoryUseCase}