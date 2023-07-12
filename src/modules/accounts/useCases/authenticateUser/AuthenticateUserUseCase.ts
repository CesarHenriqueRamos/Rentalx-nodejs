import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositores/IUsersRepositoy";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email:string;
  password:string;
}
interface IRespose{
  user:{
    name:string;
    email:string;
    isAdmin:boolean
  }
  token:string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(@inject("UserRepository")
  private userRepository:IUserRepository){}
  async execute({email,password}:IRequest):Promise<IRespose>{
    const user = await this.userRepository.findByEmail(email)
    if(!user){
      throw new AppError('Email or password incorrect!')
    }
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch){
      throw new AppError('Email or password incorrect!')
    }
    const token = sign({},"96bc62c9a547c5591c633fb9f8fd7bb9",{
      subject:user.id,
      expiresIn:"1d"
    })
    return {user:{
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin
    },token}
  }
}
export {AuthenticateUserUseCase}