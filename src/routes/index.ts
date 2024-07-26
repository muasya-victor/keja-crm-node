import { Router } from 'express';
import { getHandler } from '../controllers';
import {getUserHandler} from "../controllers/AuthController";
import {getFirmsHandler} from "../controllers/FirmController";

const router = Router();

router.get('/example', getHandler);

// user
router.get('/user/:id', getUserHandler);

//firms
router.get("/firm", getFirmsHandler)

export default router;
