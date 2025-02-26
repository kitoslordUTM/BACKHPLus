import { Router } from "express";
import { getPatients, postPatient, updatePatient } from "../controllers/patient.controller";
import { getPatientByUserId } from "../controllers/patient.controller";
import { getDoctorPatientByUserId } from "../controllers/patient.controller";

const router = Router()

router.get('/Get', getPatients);

router.post('/Post', postPatient);

router.patch("/Patch/:id", updatePatient); 

router.get('/User/:userId', getPatientByUserId)

router.get('/User/Doctor/:userId', getDoctorPatientByUserId )


export default router