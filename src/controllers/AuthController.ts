import { Request, Response } from 'express';

export const getUserHandler = (req: Request, res: Response) => {
    res.json({ message: 'User 1' });
};

