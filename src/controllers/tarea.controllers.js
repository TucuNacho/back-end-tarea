import Tarea from "../models/tarea.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Hola desde back de tareas");
};

export const leerTarea = (req, res) => {};

export const crearTarea= async(req, res)=>{
    try {
        const nuevaTarea = new Tarea(req.body)
        await nuevaTarea.save()
        res.status(201).json({mensaje:'La tarea fue agregada correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:'La tarea no pudo crearse'})
    }
}
