import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { Users } from "../infra/typeorm/entities/User"


interface IUserRepository{
  create(data:ICreateUserDTO):Promise<void>
  findByEmail(email:string):Promise<Users>
  findById(id:string):Promise<Users>
}
export {IUserRepository}