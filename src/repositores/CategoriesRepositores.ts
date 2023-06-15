import { Category } from "../routes/model/Category";

//DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name:string,
  description:string
}

class CategoresRepositores {
  private categories: Category[];

  constructor(){
    this.categories = []
  }

  create({name, description}:ICreateCategoryDTO){
    const category = new Category()
      Object.assign(category,{
        name,
        description,
        created_ad: new Date()
      })
      this.categories.push(category)
  }
}

export { CategoresRepositores }