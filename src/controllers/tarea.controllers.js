import Tarea from "../models/tarea.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Hola desde back de tareas");
};

export const leerTarea = async (req, res) => {
  try {
    const buscarTarea = await Tarea.find();
    res.status(200).json(buscarTarea);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "La tarea no pudo ser encontrada" });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "La tarea fue agregada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "La tarea no pudo crearse" });
  }
};

export const borrarTarrea = async (req, res) => {
  try {
    const eliminarTarea = await Tarea.findByIdAndDelete(req.params.id);
    if (!eliminarTarea) {
      return res
        .status(404)
        .json({ mensaje: "No se econtro la tarea que desea eliminar" });
    }
    res.status(200).json({ mensaje: "Tarea eliminida correctamente👍" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar tarea✖️" });
  }
};

export const leerTareaPorId = async (req, res) => {
  try {
    const tareaEncontrada = await Tarea.findById(req.params.id);
    if (!tareaEncontrada) {
      return res
        .status(404)
        .json({ mensaje: "No se econtro la tarea que desea buscar" });
    }
    res.status(200).json(tareaEncontrada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al encontrar tarea✖️" });
  }
};

export const editarTarea = async (req, res) => {
  try {
    const actualizarTarea = await Tarea.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!actualizarTarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada a editar" });
    }
    res.status(200).json({ mensaje: "Tarea edita con exito 👍" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al encontrar tarea✖️" });
  }
};
