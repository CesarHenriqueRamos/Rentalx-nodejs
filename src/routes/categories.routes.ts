import { Router } from "express";
import { CategoresRepositores } from "../repositores/CategoriesRepositores";

const categoriesRoutes = Router()
const categoresRepositores = new CategoresRepositores();

categoriesRoutes.post('/', (request, response) => {
  const {name, description} = request.body
  categoresRepositores.create({name, description})
  return response.status(201).send()
})

export { categoriesRoutes };