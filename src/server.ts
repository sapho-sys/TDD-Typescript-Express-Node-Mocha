import express, { Application , Request , Response , NextFunction} from 'express';
import routes from "routes";

const createServer = () =>{
    const app: Application = express();

    app.get('/', (req: Request , res: Response, next: NextFunction) =>{
        res.send("Hello World!")
    });

    app.use(routes);

    return app;

};

export default createServer;