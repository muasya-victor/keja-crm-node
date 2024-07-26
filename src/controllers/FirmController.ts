import { Request, Response } from 'express';
import {FirmModel} from '../models/FirmModel';

export const getFirmsHandler = (req: Request, res: Response) => {
    res.json({ message: 'Firms' });
};

export const postFirmsHandler = async (req: Request, res: Response) => {
    try {
        const Firm = await FirmModel.create(req.body);
        res.status(200).json(Firm);
    }
    catch (error:any) {
        res.status(500).json({ message: 'Failed to add firms to db', error: error.message });
    }
}