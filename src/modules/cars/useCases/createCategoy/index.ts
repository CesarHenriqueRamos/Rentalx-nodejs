
import { CategoriesRepository } from "../../repositores/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoresRepositores = CategoriesRepository.getIstance()
const createCategoyUseCase = new CreateCategoryUseCase(categoresRepositores)
const createCategoryController = new CreateCategoryController(createCategoyUseCase)

export {createCategoryController, createCategoyUseCase}