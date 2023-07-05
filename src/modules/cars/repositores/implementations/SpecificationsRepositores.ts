import { Specifications } from "../../entities/Specifications";
import { ICreateSpecificationsDTO, ISpecificationsRepositores } from "../ISpecificationsRepositores";

class SpecificationsRepositores implements ISpecificationsRepositores{
  private specifications : Specifications[]; 
  constructor(){
    this.specifications = []
  }
  create({ name, description }: ICreateSpecificationsDTO):void {
    const specification = new Specifications()
    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })
    this.specifications.push(specification)
    
  }
  findByName(name: string): Specifications {
    const specification = this.specifications.find(specification => specification.name === name)
    return specification;
  }

}

export {SpecificationsRepositores}