import { Router } from "express";
import { signup } from "../controllers/auth.controller";
import { signIn, signOut, sendVerficationCode, updateUser } from "../controllers/auth.controller";

const router = Router()

router.post('/signUp', signup);
router.post('/signIn' , signIn);
router.post('/signOut', signOut);
router.patch('/verify', sendVerficationCode)
router.patch('/Update/:userId',updateUser )

export default router