import { Router } from "express";
import { CategoresRepositores } from "../repositores/CategoriesRepositores";
import { CreateCategoriesServices } from "../services/CreateCategoriesServices";

const categoriesRoutes = Router()
const categoresRepositores = new CategoresRepositores();

categoriesRoutes.post('/', (request, response) => {
  const {name, description} = request.body
  const createCategoriesServices = new CreateCategoriesServices(categoresRepositores)
  createCategoriesServices.execute({name,description})  
  return response.status(201).send()
})
categoriesRoutes.get('/', (request, response) => {
  const categories  = categoresRepositores.list();
  return response.status(200).json(categories)
})

export { categoriesRoutes };