import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategory';

export const router = Router();

router.get('/categories', (req, res) => {
    res.send('GET');
});

router.get('/categories', (req, res) => {
    res.send('POST');
});

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
