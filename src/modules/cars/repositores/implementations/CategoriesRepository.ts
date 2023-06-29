import { Category } from "../../model/Category";
import { ICategoryRepositores, ICreateCategoryDTO } from "../ICategoriesRepositores";



class CategoriesRepository implements ICategoryRepositores {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository
  private constructor(){
    this.categories = []
  }
  public static getIstance():CategoriesRepository{
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE
  }

  create({name, description}:ICreateCategoryDTO){
    const category = new Category()
      Object.assign(category,{
        name,
        description,
        created_at: new Date()
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

export { CategoriesRepository }