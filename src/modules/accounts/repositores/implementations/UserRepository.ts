import { Repository, getRepository } from "typeorm"
import { Users } from "@modules/accounts/entities/User"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"

class UserRepository{
  private repository: Repository<Users>
  constructor(){
    this.repository = getRepository(Users)
  }

  async create({id,name,email,password,driver_license, avatar}:ICreateUserDTO):Promise<void>{
    const user = this.repository.create({
      id,
      name,
      password,
      email,
      driver_license,
      avatar
    })
    await this.repository.save(user)
  }

  async findByEmail(email:string):Promise<Users>{
    const emailAlreadyExists = await this.repository.findOne({email})
    return emailAlreadyExists
  }

  async findById(id:string):Promise<Users>{
    const user = await this.repository.findOne({id})
    return user
  }
}

export {UserRepository}