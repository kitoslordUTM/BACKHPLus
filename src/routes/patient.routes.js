import { Router } from "express";
import { getPatients, postPatient, updatePatient } from "../controllers/patient.controller";
import { getPatientByUserId } from "../controllers/patient.controller";

const router = Router()

router.get('/Get', getPatients);

router.post('/Post', postPatient);


router.patch("/Patch/:id", updatePatient); 

router.get('/User/:userId', getPatientByUserId)

export default router