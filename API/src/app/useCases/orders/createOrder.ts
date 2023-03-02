import { Request, Response } from 'express';

import { Order } from '../../models/Order';


export async function createOrder(req: Request, res: Response) {
    try {
        const { table, products } = req.body;

        const order = await Order.create({ table, products });

        res.status(201).send(order);
    } catch(error) {
        res.sendStatus(500);

        console.log(error);
    }
}
