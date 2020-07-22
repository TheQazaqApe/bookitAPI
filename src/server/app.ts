import express from 'express';
import bodyParser from 'body-parser';
import jwt from './jwt';
import cors from 'cors';
import { ErrorHandler, LogRequestHandler, UnknownRequestHandler} from './controller';
import apiRouter from './api';
import helmet from 'helmet';

export class App {
    private app: express.Application;
    
    constructor() {
        this.app = express();
        this.config();
    }

    private config() {
        this.app.use(jwt());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(LogRequestHandler);
        this.app.use(ErrorHandler);
        this.app.use('/v1/api', apiRouter);
        this.app.use('*', UnknownRequestHandler);
    }

    public start() {
        const port = process.env.PORT || '';
        const server = this.app.listen(port, function () {
            console.log('Server listening on port ' + port);
        });
    }

}

export default () => {
    console.log('Start creating server')
  
    const app = new App();
    app.start();
  }