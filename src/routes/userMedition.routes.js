import { Router } from "express";
import {postUserMedition} from "../controllers/userMedition.controller";
import {getUserMeditionsById} from "../controllers/userMedition.controller";


const router = Router()

 router.post("/user-meditions", postUserMedition);
 router.get("/user-meditions/:id", getUserMeditionsById);




export default router