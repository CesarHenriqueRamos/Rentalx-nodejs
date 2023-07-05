import { CategoriesRepository } from "../../repositores/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default () => {
  const categoresRepositores = new CategoriesRepository()
  const listCategoriesUseCase = new ListCategoriesUseCase(categoresRepositores)
  const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)
  return listCategoriesController;
}
