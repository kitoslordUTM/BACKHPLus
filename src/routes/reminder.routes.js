import { Router } from "express";
import { postReminder } from "../controllers/reminder.controller";



const router = Router()

router.post('/Post', postReminder);



export default router