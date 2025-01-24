import { Router } from "express";
import { getPatient, postPatient } from "../controllers/patient.controller";

const router = Router()

router.get('/Get', getPatient);

router.post('/Post', postPatient);