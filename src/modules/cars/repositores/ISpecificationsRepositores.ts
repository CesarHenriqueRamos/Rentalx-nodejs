import { Specifications } from "../entities/Specifications";

interface ICreateSpecificationsDTO{
  name:string;
  description:string;
}

interface ISpecificationsRepositores{
  create({name,description}:ICreateSpecificationsDTO):Promise<void>;
  findByName(name:string):Promise<Specifications>
}

export {ICreateSpecificationsDTO,ISpecificationsRepositores}