import { Router } from "express";
import userController from "../controllers/user.controller";
import logger from "../middlewares/logedIn";

const router = Router();
router.get('/', userController.getAll);
router.post('/newUser', userController.newUser)
router.get('/findUser', logger.logIn, userController.findUser)

export default router;
