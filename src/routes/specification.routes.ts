import {Router} from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationRouter = Router()


specificationRouter.post('/', (request, response) => {
  return createSpecificationController.handler(request,response)
})

export {specificationRouter}