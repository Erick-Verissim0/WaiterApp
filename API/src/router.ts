import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategory';


export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.post('/products', (req, res) => {
    res.send('POST');
});

router.get('/categories/:categoryId/products', (req, res) => {
    res.send('GET');
});

router.get('/orders', (req, res) => {
    res.send('POST');
});

router.post('/orders', (req, res) => {
    res.send('POST');
});

router.patch('/orders/:orderId', (req, res) => {
    res.send('PATCH');
});

router.delete('/orders/:orderId', (req, res) => {
    res.send('DELETE');
});
