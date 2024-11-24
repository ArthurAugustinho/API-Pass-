import { Router } from "express";
import { QueriesController } from "@/controllers/queries";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const queriesRoutes = Router()
const queriesController = new QueriesController()

queriesRoutes.use(ensureAuthenticated)

queriesRoutes.post("/", queriesController.create)
queriesRoutes.get("/", queriesController.index)
export { queriesRoutes }
