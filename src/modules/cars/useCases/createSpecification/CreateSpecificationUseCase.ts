import { inject, injectable } from "tsyringe";
import { ISpecificationsRepositores } from "../../repositores/ISpecificationsRepositores";
interface IRequest{
  name:string;
  description:string;
}

@injectable()
class CreateSpecificationUseCase{
  constructor(
    @inject("SpecificationsRepositores")
    private specificationsRepository:ISpecificationsRepositores){}
  execute({name,description}:IRequest):void{
    const specificationAlreadExists = this.specificationsRepository.findByName(name)
    if(specificationAlreadExists){
      throw new Error('Specification already exists')
    }
    this.specificationsRepository.create({name,description})
  }
}

export {CreateSpecificationUseCase}