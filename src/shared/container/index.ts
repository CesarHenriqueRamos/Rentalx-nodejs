import { UserRepository } from "@modules/accounts/infra/typeorm/repositores/UserRepository";
import { IUserRepository } from "@modules/accounts/repositores/IUsersRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositores/CategoriesRepository";
import { SpecificationsRepositores } from "@modules/cars/infra/typeorm/repositores/SpecificationsRepositores";
import { ICategoryRepositores } from "@modules/cars/repositores/ICategoriesRepositores";
import { ISpecificationsRepositores } from "@modules/cars/repositores/ISpecificationsRepositores";
import { container } from "tsyringe";

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