import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { Users } from "@modules/accounts/entities/User";
import { IUserRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUserRepository{
  users:Users[] = [];
  async create({name,email,password,driver_license}: ICreateUserDTO): Promise<void> {
    const user = new Users();
    Object.assign(user,{
      name,email,password,driver_license
    });
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<Users> {
    const dado = this.users.find(user => user.email === email)
    return dado;
  }
  async findById(id: string): Promise<Users> {
    const dado = this.users.find(user => user.id === id)
    return dado;
  }

}
export {UsersRepositoryInMemory}