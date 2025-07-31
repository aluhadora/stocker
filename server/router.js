import { Router } from 'express';

export const router = Router();

router.use('/products', (await import('./resources/products/router.js')).productsRouter);
router.use('/categories', (await import('./resources/categories/router.js')).categoriesRouter);