import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositores/implementations/UserRepository";

interface IPayload{
  sub:string
}
export async function EnsureAuthenticated(request:Request, response:Response,next:NextFunction) {
  const authHeader = request.headers.authorization;
  if(!authHeader){
    throw new Error('Token missing')
  }
  const [,token] = authHeader.split(" ")
  try {
    const { sub:user_id } = verify(token,"96bc62c9a547c5591c633fb9f8fd7bb9") as IPayload
    const userRepository = new UserRepository()
    const user = userRepository.findById(user_id)
    if(!user){
      throw new Error("User does not exists")
    }
    next()
  } catch (error) {
    throw new Error("Invalid token")
  }

}