import { Router } from "express";
import { postUser, getUser , putUser, deleteUser, patchUser} from "../controllers/user.controller";

const router = Router();

router.get('/Get', getUser);

router.post('/Post', postUser);

router.put('/Put/:id', putUser);

router.delete('/Delete/:id', deleteUser);

router.patch('/Patch/:id', patchUser);

export default router;