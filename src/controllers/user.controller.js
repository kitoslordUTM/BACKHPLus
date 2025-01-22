import userModel from "../models/user.model";


//obtener usuarios
export const getUser = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}

//crear usuarios
export const postUser = async (req, res) => {
    const {name, email, password} = req.body;
    const newUser = new userModel({name, email, password});
    await newUser.save();
    res.json({message: 'User created successfully'});   
}

export const putUser = async (req, res) => {
    const { id } = req.params;  
    const { name, email, password } = req.body;  

    try {
        // Buscar al usuario por su ID y actualizar sus datos
        const updatedUser = await userModel.findByIdAndUpdate(
            id,  // ID del usuario
            { name, email, password },  // Los nuevos valores
            { new: true }  // Opción para devolver el usuario actualizado
        );

        // Verificamos si encontramos al usuario
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });  // Si no se encuentra el usuario
        }

        res.json(updatedUser);  // Devolver el usuario actualizado
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating user' });  // Error en la base de datos
    }
}


export const deleteUser = async (req, res) => {
    const { id } = req.params;  // ID del usuario

    try {
        // Eliminar al usuario por su ID
        await userModel.findByIdAndDelete(id);

        res.json({ message: 'User deleted successfully' });  // Mensaje de éxito
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user' });  // Error en la base de datos
    }
}

export const patchUser =  async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;  // Los campos que quieres actualizar

        // findByIdAndUpdate permite actualizar el documento parcialmente
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario", error });
    }
}
