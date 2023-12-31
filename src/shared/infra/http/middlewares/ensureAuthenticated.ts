import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositores/UserRepository";

interface IPayload{
  sub:string
}
export async function EnsureAuthenticated(request:Request, response:Response,next:NextFunction) {
  const authHeader = request.headers.authorization;
  if(!authHeader){
    throw new AppError('Token missing',401)
  }
  const [,token] = authHeader.split(" ")
  try {
    const { sub:user_id } = verify(token,"96bc62c9a547c5591c633fb9f8fd7bb9") as IPayload
    const userRepository = new UserRepository()
    const user = userRepository.findById(user_id)
    if(!user){
      throw new AppError("User does not exists",401)
    }
    request.user = {
      id:user_id
    }
    next()
  } catch (error) {
    throw new AppError("Invalid token",401)
  }

}