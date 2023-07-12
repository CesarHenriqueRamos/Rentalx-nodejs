import { container } from "tsyringe";
import { ICategoryRepositores } from "../../modules/cars/repositores/ICategoriesRepositores";
import { CategoriesRepository } from "../../modules/cars/repositores/implementations/CategoriesRepository";
import { ISpecificationsRepositores } from "../../modules/cars/repositores/ISpecificationsRepositores";
import { SpecificationsRepositores } from "../../modules/cars/repositores/implementations/SpecificationsRepositores";
import { IUserRepository } from "../../modules/accounts/repositores/IUsersRepositoy";
import { UserRepository } from "../../modules/accounts/repositores/implementations/UserRepository";

container.registerSingleton<ICategoryRepositores>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepositores>(
  "SpecificationsRepositores",
  SpecificationsRepositores
)

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)