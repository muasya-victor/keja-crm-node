import serveless from "serverless-http"
import router from "./routes";
import express, { Request, Response } from 'express';
import connectToDB from "./db";
import routes from "./routes";


const app = express();
app.use(express.json());

app.use('/api', routes);

connectToDB().then(() => {
    console.log('nice')
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});


app.use('/.netlify/functions/api', router)

module.exports.handler = serveless(app);
