
import { CategoriesRepository } from "../../repositores/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default ():CreateCategoryController => {
  const categoresRepositores = new CategoriesRepository()
  const createCategoyUseCase = new CreateCategoryUseCase(categoresRepositores)
  const createCategoryController = new CreateCategoryController(createCategoyUseCase)
  return createCategoryController;
}
