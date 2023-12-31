import { Repository, getRepository } from "typeorm";
import { Specifications } from "@modules/cars/infra/typeorm/entities/Specifications";
import { ICreateSpecificationsDTO, ISpecificationsRepositores } from "@modules/cars/repositores/ISpecificationsRepositores";

class SpecificationsRepositores implements ISpecificationsRepositores{
  private repository : Repository<Specifications>; 
  constructor(){
    this.repository = getRepository(Specifications)
  }
  async create({ name, description }: ICreateSpecificationsDTO):Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })
    await this.repository.save(specification)
  }
  async findByName(name: string): Promise<Specifications> {
    const specification = await this.repository.findOne({name})
    return specification
  }

}

export {SpecificationsRepositores}