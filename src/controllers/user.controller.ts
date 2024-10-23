import { Request, Response } from 'express';
import User from '../models/user';
import { User as UserType } from '../types/user';
import { HTTP_STATUS_CODES } from '../types/http_status_codes';
import { json } from 'node:stream/consumers';
import loggedIn from '../middlewares/logedIn'

class UsersController{

    async getAll(req: Request, res: Response){
        try {
            const users = await User.find();
            res.send(users);
        }
        catch (e){
            console.log("server error: ", e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }

    async newUser(req:Request, res: Response){
        
        try {
            await new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }).save();
            console.log("new user saved successfully");
            res.sendStatus(HTTP_STATUS_CODES.SUCCESS);
        }
        catch(e){
            console.log("Error: ", e);
            res.sendStatus(HTTP_STATUS_CODES.BAD_REQUEST);

        }
    }
    findUser(req: Request, res: Response){
        if(User.find(req.body.email)){
            console.log(`User found`)
            res.sendStatus(HTTP_STATUS_CODES.SUCCESS);   
        }
        else{
            console.log("error: ");
            res.sendStatus(HTTP_STATUS_CODES.NOT_FOUND);
        }
    }


}

const controller = new UsersController();
export default controller;

