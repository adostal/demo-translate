import * as express from 'express';
import * as next from 'next';
import * as bodyParser from 'body-parser';
import {TranslateRequestModel, TranslateResponseModel} from '../shared/model';
// tslint:disable-next-line
const translate = require('google-translate-api');

const app = next({dev: true, dir: './dist/client'});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.post('/translate', async (req, res) => {
        const {q, from, to}: TranslateRequestModel = req.body;
        translate(q, {from, to}).then((result: TranslateResponseModel) => {
            res.json(result);
        }).catch((err: Error) => {
            res.status(500).json({error: err.message});
        });
    });

    server.get('*', (req, res) => handle(req, res));

    const PORT = process.env.PORT || 8080;
    server.listen(PORT, (err: Error) => {
        if (err) {
            throw err;
        }
        // tslint:disable-next-line
        console.log(`Server is ready on PORT=${PORT}`);
    });
});
