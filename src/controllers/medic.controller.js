import medicModel from "../models/medic.model";


export const getMedic = async (req, res) => {
    const users = await medicModel.find();
    res.json(users);
}


export const postMedic = async (req, res) => {
  try {
    const { name, lastname, age, speciality, direction, consultory, telephone } = req.body;

    if (!name || !lastname || !age || !speciality || !direction || !consultory || !telephone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMedic = new medicModel({ name, lastname, age, speciality, direction, consultory, telephone });
    await newMedic.save();

    res.status(201).json({
      message: 'Medic created successfully',
      medic: newMedic,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating medic', error: error.message });
  }
};

export const putMedic = async (req, res ) => {

    const { id } = req.params; 
    const { name, lastname, age, speciality, direction, consultory} = req.body;

    try{ 
        const updateMedic = await medicModel.findByIdAndUpdate
        (
            id,
            { name, lastname, age, speciality, direction, consultory},
            { new: true}
        );
        
        if(!updateMedic){
            return res.status(404).json({ message: 'Medic not found' });
        }

        return res.status(500).json({ message: 'Medic updated correctly' });
        
    }

    catch{
        console.log('error during medic update ');
        return res.status(500).json({ message: 'Error during update' });
    }

}

// ctrl } para comentar

export const deleteMedic = async (req, res ) => {

    const {id} = req.params;

    try {

        const deleteUser = await medicModel.findByIdAndDelete(id)

        if( !deleteMedic){
            return res.status(404).json({ message:  `${id} not found `})
        }
        return res.status(500).json({message: `${id} deleted correctly`})

    }

    catch {
        return res.status(500).json({message: 'error deleting medic'})
    }

}
