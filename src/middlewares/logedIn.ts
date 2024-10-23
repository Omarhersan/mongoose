import { Response, Request, NextFunction } from "express";
import User from "../models/user";
import { HTTP_STATUS_CODES } from "../types/http_status_codes";


class Logger {
    async logIn(req: Request, res: Response, next: NextFunction ){
        try{
            const user = User.find(req.body.email)
            console.log(user.email, user.password);
            if(user.password == req.body.password){
                console.log("Auth passed");
                res.sendStatus(HTTP_STATUS_CODES.SUCCESS)
                next();
                return ;
            }
            else {
                res.sendStatus(HTTP_STATUS_CODES.BAD_REQUEST);
                return ;
            }
            }
        catch (e){
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }
}

const logger = new Logger();
export default logger;


