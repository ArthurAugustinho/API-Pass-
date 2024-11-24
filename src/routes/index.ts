import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { queriesRoutes } from "./queries-routes";
import { doctorsRoutes } from "./doctors-routes";

const routes = Router()

routes.use("/users", usersRoutes)

routes.use("/sessions", sessionsRoutes)

routes.use("/queries", queriesRoutes)

routes.use("/doctors", doctorsRoutes)


export { routes }