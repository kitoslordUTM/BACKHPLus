import doctorModel from "../models/doctor.model";
import Patient from "../models/patient.model";

export const getMedic = async (req, res) => {
    const users = await doctorModel.find();
    res.json(users);
}
  

export const postDoctor = async (req, res) => {
  try {
    const { name, lastname, age, speciality, direction, consultory, telephone } = req.body;
    const userId = req.user?.id || req.body.user; // Se asume que el usuario autenticado está en req.user

    if (!name || !lastname || !age || !speciality || !direction || !consultory || !telephone || !userId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Verificar si el usuario ya tiene un médico registrado
    const existingDoctor = await doctorModel.findOne({ user: userId });
    if (existingDoctor) {
      return res.status(400).json({ message: 'User already has an assigned doctor' });
    }

    // Crear el nuevo médico con la referencia al usuario
    const newDoctor = new doctorModel({
      name,
      lastname,
      age,
      speciality,
      direction,
      consultory,
      telephone,
      user: userId, // Asocia el médico con el usuario
    });

    await newDoctor.save();

    res.status(201).json({
      message: 'Doctor created successfully',
      doctor: newDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating doctor', error: error.message });
  }
};


export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { pacientes } = req.body; // Suponiendo que req.body.pacientes es un array de IDs

  try {
    const updatedDoctor = await doctorModel.findByIdAndUpdate(
      id,
      { $addToSet: { pacientes: { $each: pacientes } } }, // Agrega múltiples pacientes sin duplicados
      { new: true, runValidators: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor no encontrado' });
    }

    res.json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el doctor', error: error.message });
  }
};



// ctrl } para comentar

export const deleteMedic = async (req, res ) => {

    const {id} = req.params;

    try {

        const deleteUser = await doctorModel.findByIdAndDelete(id)

        if( !deleteUser){
            return res.status(404).json({ message:  `${id} not found `})
        }
        return res.status(500).json({message: `${id} deleted correctly`})

    }
    catch {
        return res.status(500).json({message: 'error deleting medic'})
    }

}


// Buscar pacientes de un doctor específico con searchTerm opcional
export const getDoctorPatients = async (req, res) => {
  try {
    const { id } = req.params; // ID del doctor
    const { searchTerm } = req.query; // Término de búsqueda opcional

    // Verificar si el doctor existe
    const doctor = await doctorModel.findById(id).populate("pacientes");
    if (!doctor) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }

    let query = { _id: { $in: doctor.pacientes } }; // Filtra solo los pacientes de este doctor

    // Si hay un término de búsqueda, aplicamos el filtro
    if (searchTerm) {
      query.$or = [
        { name: { $regex: searchTerm, $options: "i" } }, // Búsqueda insensible a mayúsculas/minúsculas
        { lastname: { $regex: searchTerm, $options: "i" } }
      ];
    }

    // Buscar los pacientes filtrados
    const patients = await Patient.find(query);

    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar pacientes", error: error.message });
  }
};

export const getDoctorByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Buscar el doctor por el userId y poblar la relación con pacientes
    const doctor = await doctorModel.findOne({ user: userId }).populate('pacientes');

    if (!doctor) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }

    res.json(doctor);
  } catch (error) {
    console.error("Error al obtener el doctor:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};