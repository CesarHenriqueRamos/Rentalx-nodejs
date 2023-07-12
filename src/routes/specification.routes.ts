import {Router} from 'express'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { EnsureAuthenticated } from '../middlewares/ensureAuthenticated'

const specificationRouter = Router()
const createSpecificationController = new CreateSpecificationController()

specificationRouter.use(EnsureAuthenticated)
specificationRouter.post('/', createSpecificationController.handler)

export {specificationRouter}