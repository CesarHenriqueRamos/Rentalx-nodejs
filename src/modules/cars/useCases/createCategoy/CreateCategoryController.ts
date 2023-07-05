import {Request,Response} from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { container } from 'tsyringe'

class CreateCategoryController{
  
  async handle(request:Request, response:Response): Promise<Response>{
    const {name, description} = request.body
    const createCategoyUseCase = container.resolve(CreateCategoryUseCase)
    await createCategoyUseCase.execute({name,description})  
    return response.status(201).send()
  }
}

export {CreateCategoryController}