import { Router } from "express";
import { getMedic, postMedic, deleteMedic, putMedic } from "../controllers/medic.controller";

const router = Router()

router.get('/Get', getMedic);

router.post('/Post', postMedic);

router.put('/Put/:id',  putMedic   );

router.delete('/Delete/:id', deleteMedic );

router.patch('/Patch/:id');


export default router