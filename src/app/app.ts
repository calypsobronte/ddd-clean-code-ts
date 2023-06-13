import "dotenv/config";
// Dependence
import express, { Application, Request } from 'express';
import * as bodyParser from "body-parser";
import morgan from 'morgan';
import cors from 'cors'
import 'reflect-metadata'
import config from './../config';

// Documentation
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// Routes
import routes from './../api/routes';

const app: Application = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// ------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// enable CORS - Cross Origin Resource Sharing
app.use((req, res, next): void => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
    next();
});
//app.use(morgan("combined"));
app.use(cors());
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    err.status = 404;
    next(err);
});


// settings
app.set('port', config.port || 3000);

// mount api v1 routes
app.get('/', (_req, res) => {
    res.send('Welcome API Rest');
})
app.use('/api/v1', routes)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(config.swaggerSpec)))
app.use('/*', (_req, res) => res.status(404).send('Not Found'))

export default app;