import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/accounts/repositores/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";


@injectable()
class CreateUserUseCase {
  constructor(@inject("UserRepository")
  private userRepository:IUserRepository){}
  async execute({name,password,email,driver_license}:ICreateUserDTO):Promise<void>{
    const passwordHash = await hash(password, 8);
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if(userAlreadyExists){
      throw new AppError('Email already exists')
    }
    await this.userRepository.create({name,password: passwordHash,email,driver_license})
  }
}

export {CreateUserUseCase}