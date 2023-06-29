import { SpecificationsRepositores } from "../../repositores/implementations/SpecificationsRepositores";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepositores();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController,createSpecificationUseCase}