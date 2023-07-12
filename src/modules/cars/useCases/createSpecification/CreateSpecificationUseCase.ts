import { inject, injectable } from "tsyringe";
import { ISpecificationsRepositores } from "../../repositores/ISpecificationsRepositores";
import { AppError } from "../../../../errors/AppError";
interface IRequest{
  name:string;
  description:string;
}

@injectable()
class CreateSpecificationUseCase{
  constructor(
    @inject("SpecificationsRepositores")
    private specificationsRepository:ISpecificationsRepositores){}
  async execute({name,description}:IRequest):Promise<void>{
    const specificationAlreadExists = await this.specificationsRepository.findByName(name)
    if(specificationAlreadExists){
      throw new AppError('Specification already exists')
    }
    await this.specificationsRepository.create({name,description})
  }
}

export {CreateSpecificationUseCase}