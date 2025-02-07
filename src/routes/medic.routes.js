import { Router } from "express";
import { getMedic, deleteMedic, updateDoctor, getDoctorPatients } from "../controllers/medic.controller";
import { postDoctor } from "../controllers/medic.controller";
import { getDoctorByUserId } from "../controllers/medic.controller";

const router = Router()

router.get('/Get', getMedic);

router.post('/Post', postDoctor);

router.delete('/Delete/:id', deleteMedic );

router.patch('/Patch/:id', updateDoctor);

router.get('/Get/:id/Patients', getDoctorPatients)

router.get('/User/:userId', getDoctorByUserId)

export default router