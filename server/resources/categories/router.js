import { Router } from 'express';
import * as controller from './controller.js';

export const categoriesRouter = Router();

categoriesRouter.get('/', controller.getCategories);
categoriesRouter.post('/', controller.addCategory);
categoriesRouter.delete('/:id', controller.deleteCategory);
categoriesRouter.put('/:id', controller.updateCategory);
