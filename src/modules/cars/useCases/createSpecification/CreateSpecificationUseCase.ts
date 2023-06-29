import { Specifications } from "../../model/Specifications";
import { ISpecificationsRepositores } from "../../repositores/ISpecificationsRepositores";
interface IRequest{
  name:string;
  description:string;
}
class CreateSpecificationUseCase{
  constructor(private specificationsRepository:ISpecificationsRepositores){}
  execute({name,description}:IRequest):void{
    const specificationAlreadExists = this.specificationsRepository.findByName(name)
    if(specificationAlreadExists){
      throw new Error('Specification already exists')
    }
    this.specificationsRepository.create({name,description})
  }
}

export {CreateSpecificationUseCase}