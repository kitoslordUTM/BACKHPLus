import UserMedition from "../models/userMedition.model";

// Obtener mediciones de usuario con búsqueda opcional y populando usuario

export const postUserMedition = async (req, res) => { 
    try {
        const { meditionName, value, date, user } = req.body;
    
        if (!meditionName || !value || !date || !user) {
        return res.status(400).json({ message: "All fields are required, including user" });
        }
    
        const newUserMedition = new UserMedition({
        meditionName,
        value,
        date,
        user, // Relacionar con un usuario
        });
    
        await newUserMedition.save();
    
        res.status(201).json({
        message: "UserMedition created successfully",
        userMedition: newUserMedition,
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating userMedition", error: error.message });
    }
    };
    

export const getUserMeditionsById = async (req, res) => {
    try {
        const { id } = req.params;
        const userMeditions = await UserMedition.find({ user: id })
        .populate("user", "name lastname email"); // Traer información del usuario
    
        res.json(userMeditions);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving userMeditions", error: error.message });
    }
};

