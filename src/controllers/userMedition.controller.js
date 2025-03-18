import UserMedition from "../models/userMedition.model";

export const postPatientMedition = async (req, res) => { 
  try {
    // Ajusta el nombre de las propiedades según lo que envíes desde tu frontend
    const { meditionName, value, patient } = req.body;

    // Validar campos requeridos
    if (!meditionName || !value || !patient) {
      return res.status(400).json({ message: "All fields are required, including patient" });
    }

    // Crear nueva medición
    const newMedition = new UserMedition({
      meditionName,
      value,
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
    const { startDate } = req.query; // Fecha opcional desde query params

    // Construimos el filtro de búsqueda
    let filter = { patient: id };

    // Si se proporciona `startDate`, filtramos desde esa fecha en adelante
    if (startDate) {
      filter.createdAt = { 
        $gte: new Date(startDate) // Solo filtra desde `startDate` en adelante
      };
    }

    // Buscar mediciones con el filtro y poblar información del paciente
    const meditions = await UserMedition.find(filter)
      .populate("patient", "name lastname age") // Solo los campos que quieres mostrar
      .sort({ createdAt: -1 }); // Ordenar de más reciente a más antiguo

    res.json(meditions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving meditions", error: error.message });
  }
};

