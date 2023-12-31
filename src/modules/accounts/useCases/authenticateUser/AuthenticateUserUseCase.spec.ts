import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositores/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase:AuthenticateUserUseCase;
let usersRepositoryInMemory:UsersRepositoryInMemory;
let createUserUseCase:CreateUserUseCase;
describe("Authenticate User", ()=>{
  beforeEach(()=>{
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })
  it("should be able to authenticate an user", async()=>{
    const user:ICreateUserDTO = {
      name:"cesar",
      email:"teste@gmail.com",
      password:"1234",
      driver_license:"12345"
    }
    await createUserUseCase.execute(user);
    const result  = await authenticateUserUseCase.execute({
      email:user.email,
      password:user.password
    })
    expect(result).toHaveProperty('token')
  })
  it("should be able to authenticate an nonexistent email", async()=>{
    expect(async() => {
      const user:ICreateUserDTO = {
        name:"cesar",
        email:"teste@gmail.com",
        password:"1234",
        driver_license:"12345"
      }
      await createUserUseCase.execute(user);
      await authenticateUserUseCase.execute({
        email:"false@email.com",
        password:"1234"
      })
     }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able to authenticate an nonexistent password", async()=>{
    expect(async() => {
      const user:ICreateUserDTO = {
        name:"cesar",
        email:"teste@gmail.com",
        password:"1234",
        driver_license:"12345"
      }
      await createUserUseCase.execute(user);
      await authenticateUserUseCase.execute({
        email:"teste@gmail.com",
        password:"4321"
      })
     }).rejects.toBeInstanceOf(AppError)
  })
})