import { Router } from "express";
import { test, leerTarea, crearTarea } from "../controllers/tarea.controllers.js";

const router = Router();

router.route('/prueba').get(test)
router.route('/').get(leerTarea).post(crearTarea)

export default router
