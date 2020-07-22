import { Request, Response } from 'express';
import { Errors } from './libs';
import { NextFunction } from 'connect';

export function ErrorHandler(error: Errors.IError, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    res.status(error.status).json(error);
}
export function UnknownRequestHandler(req: Request, res: Response) {
    res.send('<h1>Page not found</h1>').status(404);
}
export function LogRequestHandler(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(JSON.stringify({ url: req.url, method: req.method, body: req.body || {}, query: req.query }));
    } catch (e) {
        console.error('Cannot log request', e);
    } finally {
        next();
    }
}