import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { JoyErrors } from '../../libs';
import { SignIn, ISignIn } from './service';

export async function SignInHandler(req: Request, res: Response, next: NextFunction){
    const Schema = Joi.object({
        userName: Joi.string().required(),
        password: Joi.string().required()
    });

    try {
        const data: ISignIn = req.body;     
        const { error, value } = Schema.validate(data);
        if (error) {
            throw JoyErrors.InvalidBody(error);
        }
        const results = await SignIn(data);
        res.status(200).json(results);
    }
    catch(e) {
        next(e);
    }
}