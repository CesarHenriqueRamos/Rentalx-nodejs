import { Request,Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

class CreateSpecificationController{
  async handler(request:Request,response:Response){
    const {name, description} = request.body
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
    await createSpecificationUseCase.execute({name,description})
    return response.status(201).send()
  }
}
export {CreateSpecificationController}