import { ICategoryRepositores } from "../repositores/ICategoriesRepositores";

interface IRequest {
  name:string;
  description:string;
}

class CreateCategoriesServices {
  constructor(private categoresRepositores:ICategoryRepositores){}
  execute({name,description}:IRequest): void{
    const categoryAlreadExists = this.categoresRepositores.findByName(name)
  if(categoryAlreadExists){
    throw new Error('Category already exists')
  }
  this.categoresRepositores.create({name, description})
  }
}

export {CreateCategoriesServices}