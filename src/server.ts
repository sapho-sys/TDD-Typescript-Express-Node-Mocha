import express, { Application , Request , Response , NextFunction} from 'express';
 

const createServer = () =>{
    const app: Application = express();

    app.get('/', (req: Request , res: Response, next: NextFunction) =>{
        res.send("Hello World!")
    })
    return app;

};

export default createServer;