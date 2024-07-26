import { Request, Response } from 'express';

export const getHandler = (req: Request, res: Response) => {
    res.json({ message: 'Hello from the API!' });
};

