import { Repository, getRepository } from "typeorm";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoryRepositores, ICreateCategoryDTO } from "@modules/cars/repositores/ICategoriesRepositores";



class CategoriesRepository implements ICategoryRepositores {
  private repository: Repository<Category>;
  constructor(){
    this.repository = getRepository(Category)
  }

  async create({name, description}:ICreateCategoryDTO):Promise<void>{
       const category = this.repository.create({
        name,
        description
      })
      await this.repository.save(category)
  }
  async list():Promise<Category[]>{
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name:string): Promise<Category> {
    const category = await this.repository.findOne({name})
    return category
  }
}

export { CategoriesRepository }