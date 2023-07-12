import { Repository, getRepository } from "typeorm"
import { Users } from "../../entities/User"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"

class UserRepository{
  private repository: Repository<Users>
  constructor(){
    this.repository = getRepository(Users)
  }

  async create({name,email,password,driver_license}:ICreateUserDTO):Promise<void>{
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license
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