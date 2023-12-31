import { Category } from "../infra/typeorm/entities/Category";

//DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name:string,
  description:string
}
interface ICategoryRepositores {
  findByName(name:string): Promise<Category>;
  list(): Promise<Category[]>;
  create({name,description}:ICreateCategoryDTO):Promise<void>;
}
export {ICategoryRepositores,ICreateCategoryDTO}