import { Router } from "express";
import { DoctorsController } from "@/controllers/doctors-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const doctorsRoutes = Router()
const doctorsController = new DoctorsController()

doctorsRoutes.use(ensureAuthenticated)
doctorsRoutes.get("/", doctorsController.index)

export { doctorsRoutes}