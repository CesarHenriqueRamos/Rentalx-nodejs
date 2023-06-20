import { Category } from "../model/Category";
//DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name:string,
  description:string
}
interface ICategoryRepositores {
  findByName(name:string): Category;
  list(): Category[];
  create({name,description}:ICreateCategoryDTO):void;
}
export {ICategoryRepositores,ICreateCategoryDTO}