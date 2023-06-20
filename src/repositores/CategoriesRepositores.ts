import { Category } from "../model/Category";
import { ICategoryRepositores, ICreateCategoryDTO } from "./ICategoriesRepositores";



class CategoresRepositores implements ICategoryRepositores {
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
  list():Category[]{
    return this.categories;
  }
  findByName(name:string): Category {
    const category = this.categories.find(category => category.name === name)
    return category
  }
}

export { CategoresRepositores }