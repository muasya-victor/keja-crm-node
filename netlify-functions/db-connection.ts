import { Handler } from '@netlify/functions';
import connectToDB from '../src/db'; // Adjust the import path as needed

const handler: Handler = async (event, context) => {
    try {
        await connectToDB();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Database connected successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Database connection error', error }),
        };
    }
};

export { handler };
