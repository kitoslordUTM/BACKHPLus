import { signInSchema, signupSchema } from "../middleware/validator";
import userModel from "../models/user.model";
import { transport } from "../middleware/sendMail";
import { hmacProcess } from "../utils/hashing";
import { doHash, doHashValidation } from "../utils/hashing";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password, notificationToken } = req.body;

  try {
    const { error, value } = signupSchema.validate({ email, password });

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists!" }); // 409 Conflict es más apropiado
    }

    // *** Corrección: Pasa solo la contraseña (value.password) a doHash ***
    const hashedPassword = await doHash(value.password, 12); // 12 es el salt rounds

    const newUser = new userModel({
      email,
      password: hashedPassword,
      notificationToken
    });

    const result = await newUser.save();
    result.password = undefined; // No enviar la contraseña hasheada en la respuesta
    res.status(201).json({
      message: "Cuenta creada exitosamente", // Mensaje más descriptivo
      user: {
        // Puedes incluir información del usuario creado (sin la contraseña)
        email: result.email,
        id: result._id,
        token: result.notificationToken
        // ... otros campos que quieras enviar
      },
    });
  } catch (error) {
    console.error("Error en el registro:", error);
    res
      .status(500)
      .json({ success: false, message: "Error interno del servidor" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = signInSchema.validate({ email, password });
    if (error) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists!" });
    }

    const existingUser = await userModel.findOne({ email }).select("+password");

    if (!existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists!" });
    }

    const result = await doHashValidation(password, existingUser.password);

    if (!result) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists!" });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
      },
      process.env.TOKEN_SECRET,

      {
        expiresIn: "5h",
      }
    );

    res
      .cookie("Authorization", "Bearer " + token, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        token,
        message: "te logueaste",
        user: {
          // Puedes incluir información del usuario creado (sin la contraseña)
          email:  existingUser.email,
          id:  existingUser._id
        },
      });
  } catch (error) {}
};


export const signOut =  async ( req, res) =>{

  res.clearCookie('Authorization').status(200).json( {success:true , message: 'log Out exitoso'})

}


export const sendVerficationCode = async (req, res ) => {

  const {email} = req.body;
  try{

    const existingUser =  await userModel.findOne({email})
    
    if(!existingUser){
      return res
      .status(404)
      .json({ success: false, message: "User not exists!" });
    }

    if (existingUser.verified) {
      return res
          .status(400)
          .json({ success: false, message: 'You are already verified!' });
  }
  
  const codeValue = Math.floor(Math.random() * 1000000).toString();

  let info = await transport.sendMail({
    from: 'healtyplus41@gmail.com', // Usa el mismo nombre que en la configuración
    to: existingUser.email,
    subject: "verification code",
    html: `<h1>${codeValue}</h1>`,
  });

  

  if (info.accepted[0] === existingUser.email) {
    console.log('jola')
    const hashedCodeValue = hmacProcess(codeValue, 'secret');
    existingUser.verificationCode = hashedCodeValue;
    existingUser.verificationCodeValidation = Date.now(); // Guarda la fecha de validación
    await existingUser.save();
  
    return res.status(200).json({ success: true, message: 'Code sent!' });
  }
    res.status(400).json({ success: true, message: 'Code not sent!' });

  }
  catch (error) {
    console.error('Error en sendVerficationCode:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    
  }

}

 

export const updateUser = async (req, res) => {
  const { userId } = req.params; // Obtiene el ID desde los parámetros
  const updates = req.body; // Obtiene los datos a actualizar

  try {
    const existingUser = await userModel.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ success: false, message: "User not found!" });
    }

    // 🔹 Evita modificar directamente la contraseña (debe tener un proceso separado)
    if (updates.password) {
      return res.status(400).json({ success: false, message: "Use a password update endpoint!" });
    }

    // 🔹 Actualiza solo los campos enviados en `req.body`
    Object.keys(updates).forEach((key) => {
      existingUser[key] = updates[key];
    });

    await existingUser.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      user: {
        email: existingUser.email,
        id: existingUser._id,
        verified: existingUser.verified,
        ...updates, // Muestra los campos actualizados
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
