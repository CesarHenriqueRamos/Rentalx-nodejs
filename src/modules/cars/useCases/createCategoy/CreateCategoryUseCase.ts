import { inject, injectable } from "tsyringe";
import { ICategoryRepositores } from "../../repositores/ICategoriesRepositores";

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
    throw new Error('Category already exists')
  }
    await this.categoresRepositores.create({name, description})
  }
}

export {CreateCategoryUseCase}