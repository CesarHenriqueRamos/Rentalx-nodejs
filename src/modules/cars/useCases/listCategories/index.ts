import { CategoriesRepository } from "../../repositores/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoresRepositores = CategoriesRepository.getIstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoresRepositores)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export {listCategoriesController, listCategoriesUseCase}