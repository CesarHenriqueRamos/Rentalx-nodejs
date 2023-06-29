import { Specifications } from "../model/Specifications";

interface ICreateSpecificationsDTO{
  name:string;
  description:string;
}

interface ISpecificationsRepositores{
  create({name,description}:ICreateSpecificationsDTO):void;
  findByName(name:string):Specifications
}

export {ICreateSpecificationsDTO,ISpecificationsRepositores}