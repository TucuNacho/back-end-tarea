import { Router } from "express";
import { test, leerTarea, crearTarea, borrarTarrea } from "../controllers/tarea.controllers.js";

const router = Router();

router.route('/prueba').get(test)
router.route('/').get(leerTarea).post(crearTarea)
router.route('/:id').delete(borrarTarrea)

export default router
