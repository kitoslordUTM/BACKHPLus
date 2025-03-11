import Patient from "../models/patient.model";

// Obtener pacientes con búsqueda opcional y populando doctor y usuario
export const getPatients = async (req, res) => {
  try {
    const { searchTerm } = req.query;
    let query = {};

    if (searchTerm) {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { lastname: { $regex: searchTerm, $options: "i" } },
        ],
      };
    }

    const patients = await Patient.find(query)
      .populate("user", "name lastname email") // Traer información del usuario
      .populate("doctor", "name lastname speciality"); // Traer información del doctor

    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error: error.message });
  }
};

// Crear un nuevo paciente asociado a un usuario y a un doctor
export const postPatient = async (req, res) => {
  try {
    const { name, lastname, age, gender, telephone, direction, condition, rescueNumberOne, rescueNumberTwo, user, doctor } = req.body;

    if (!name || !lastname || !age || !gender || !telephone || !direction || !rescueNumberOne||        !rescueNumberTwo || !condition || !user ) {
      return res.status(400).json({ message: "All fields are required, including user and doctor" });
    }

    const newPatient = new Patient({
      name,
      lastname,
      age,
      gender,
      telephone,
      direction,
      condition,
      rescueNumberOne,
      rescueNumberTwo,
      user,
      doctor, // Relacionar con un doctor
    });

    await newPatient.save();

    res.status(201).json({
      message: "Patient created successfully",
      patient: newPatient,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating patient", error: error.message });
  }
};


// Actualizar paciente parcialmente
export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Buscar al paciente
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Si se envía un doctor y el paciente no tiene, se añade
    if (updates.doctor && !patient.doctor) {
      patient.doctor = updates.doctor;
    }

    // Actualizar solo los campos enviados en req.body
    Object.assign(patient, updates);

    // Guardar cambios
    await patient.save();

    res.json({
      message: "Patient updated successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating patient", error: error.message });
  }
};


export const getPatientByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Buscar al paciente por userId y poblar la relación con el doctor
    const patient = await Patient.findOne({ user: userId }).populate("doctor");

    if (!patient) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    res.json(patient);
  } catch (error) {
    console.error("Error al obtener el paciente:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};


export const getDoctorPatientByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Buscar el paciente por userId y popular la información del doctor
    const patient = await Patient.findOne({ user: userId }).populate("doctor");

    if (!patient) {
      return res.status(404).json({ message: "Patient not found for this user" });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error("Error fetching patient by userId:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

