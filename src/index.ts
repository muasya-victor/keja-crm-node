import express, { Request, Response } from 'express';
import routes from './routes';
import connectToDB from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
