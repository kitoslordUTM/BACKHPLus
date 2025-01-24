import patientModel from "../models/patient.model";


export const getPatient = async (req, res) => {
    const patient = await patientModel.find();
    res.json(patient);
}



export const postPatient = async (req, res) => {
    try {
      const { name, lastname, age, gender, telephone, direction, condition } = req.body;
      // Validar que todos los campos requeridos están presentes
      if (!name || !lastname || !age || !gender || !telephone || !direction || !condition) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      // Crear un nuevo paciente
      const newPatient = new patientModel({
        name,
        lastname,
        age,
        gender,
        telephone,
        direction,
        condition,
      });
      // Guardar el paciente en la base de datos
      await newPatient.save();
      // Respuesta exitosa
      res.status(201).json({
        message: 'Patient created successfully',
        patient: newPatient,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating patient', error: error.message });
    }
  };

