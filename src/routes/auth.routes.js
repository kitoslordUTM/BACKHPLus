import { Router } from "express";
import { signup } from "../controllers/auth.controller";
import { signIn, signOut, sendVerficationCode } from "../controllers/auth.controller";

const router = Router()

router.post('/signUp', signup);
router.post('/signIn' , signIn);
router.post('/signOut', signOut);
router.patch('/verify', sendVerficationCode)



export default router