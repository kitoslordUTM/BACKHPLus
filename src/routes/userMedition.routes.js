import { Router } from "express";
import { postPatientMedition } from "../controllers/userMedition.controller";
import { getPatientMeditionsById } from "../controllers/userMedition.controller";

const router = Router()

 router.post("/user-meditions", postPatientMedition);
 router.get("/user-meditions/:id", getPatientMeditionsById);




export default router