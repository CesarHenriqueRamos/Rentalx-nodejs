import express, { NextFunction, Response,Request } from 'express'
import "express-async-errors"
import swagger from 'swagger-ui-express'
import '@shared/infra/typeorm'
import '@shared/container'
import swaggerFile from '../../../swagger.json'
import { router } from './routes'
import { AppError } from '@shared/errors/AppError'

const app = express()
app.use(express.json())
app.use("/api-docs",swagger.serve,swagger.setup(swaggerFile))
app.use(router)
app.use((err:Error,request:Request, response:Response,next:NextFunction)=>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({message:err.message})
  }
  return response.status(500).json({
    status:'error',
    message:`Internal server error - ${err.message}`
  })
})

app.listen(3333, () => {
  console.log('run server')
})