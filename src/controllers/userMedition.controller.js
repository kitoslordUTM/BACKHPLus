import UserMedition from "../models/userMedition.model";

export const postPatientMedition = async (req, res) => { 
  try {
    // Ajusta el nombre de las propiedades según lo que envíes desde tu frontend
    const { meditionName, value, date, patient } = req.body;

    // Validar campos requeridos
    if (!meditionName || !value || !date || !patient) {
      return res.status(400).json({ message: "All fields are required, including patient" });
    }

    // Crear nueva medición
    const newMedition = new UserMedition({
      meditionName,
      value,
      date,
      patient // Relaciona con un paciente
    });

    await newMedition.save();

    res.status(201).json({
      message: "Medition created successfully",
      medition: newMedition,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating medition", error: error.message });
  }
};


export const getPatientMeditionsById = async (req, res) => {
    try {
      const { id } = req.params; // ID del paciente
      const meditions = await UserMedition.find({ patient: id })
        .populate("patient", "name lastname age"); // Solo los campos que quieras mostrar
  
      res.json(meditions);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving meditions", error: error.message });
    }
  };