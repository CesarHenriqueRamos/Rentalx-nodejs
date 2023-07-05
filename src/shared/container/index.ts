import { container } from "tsyringe";
import { ICategoryRepositores } from "../../modules/cars/repositores/ICategoriesRepositores";
import { CategoriesRepository } from "../../modules/cars/repositores/implementations/CategoriesRepository";
import { ISpecificationsRepositores } from "../../modules/cars/repositores/ISpecificationsRepositores";
import { SpecificationsRepositores } from "../../modules/cars/repositores/implementations/SpecificationsRepositores";

container.registerSingleton<ICategoryRepositores>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepositores>(
  "SpecificationsRepositores",
  SpecificationsRepositores
)