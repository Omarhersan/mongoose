import { json, Request, Response, Router } from "express";
import userRouter from "./users";

const router = Router();
router.get('/', (req:Request, res: Response) => {
    res.send("API is working");
});

router.use('/users', userRouter);


export default router;