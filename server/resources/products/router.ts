import { Router } from 'express';
import * as controller from './controller.js';

export const productsRouter = Router();

productsRouter.get('/', controller.getProducts);
productsRouter.post('/', controller.addProduct);
productsRouter.delete('/:id', controller.deleteProduct);
productsRouter.put('/:id', controller.updateProduct);
