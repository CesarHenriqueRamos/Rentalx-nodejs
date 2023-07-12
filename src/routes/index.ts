import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRouter } from "./specification.routes";
import { userRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router()
router.use(authenticateRoutes)
router.use("/categories",categoriesRoutes)
router.use("/specification",specificationRouter)
router.use("/user", userRoutes)


export {router}