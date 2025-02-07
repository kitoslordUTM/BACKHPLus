import { Router } from "express";
import { getPatients, postPatient, updatePatient } from "../controllers/patient.controller";

const router = Router()

router.get('/Get', getPatients);

router.post('/Post', postPatient);


router.patch("/Patch/:id", updatePatient); 

export default router