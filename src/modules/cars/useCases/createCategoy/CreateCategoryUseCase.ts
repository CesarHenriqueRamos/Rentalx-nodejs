import { ICategoryRepositores } from "../../repositores/ICategoriesRepositores";

interface IRequest {
  name:string;
  description:string;
}

class CreateCategoryUseCase {
  constructor(private categoresRepositores:ICategoryRepositores){}
  async execute({name,description}:IRequest): Promise<void>{
    const categoryAlreadExists = await this.categoresRepositores.findByName(name)
  if(categoryAlreadExists){
    throw new Error('Category already exists')
  }
  this.categoresRepositores.create({name, description})
  }
}

export {CreateCategoryUseCase}