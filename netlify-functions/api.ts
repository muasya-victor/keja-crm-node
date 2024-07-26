import serverless from 'serverless-http';
import express from 'express';
import connectToDB from '../src/db';
import routes from '../src/routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Connect to Database
connectToDB().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Serverless handler
const handler = serverless(app);

export { handler };
