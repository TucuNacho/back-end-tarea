import tareaRoutes from "./tarea.routes.js"
import { Router } from "express"

const router= Router()

router.use("/tareas",tareaRoutes)

export default router
