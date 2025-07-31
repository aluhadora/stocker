import { Request, Response } from 'express';
import { Category } from '../../dataModels/categories';

export async function getCategories(req : Request, res : Response) {
    if (!global.state || !global.state.categories) {
        global.state = global.state || {};
        global.state.categories = [];
    }

    res.json(global.state.categories);
}

export async function addCategory(req : Request, res : Response) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    global.state = global.state || {};
    global.state.categories = global.state.categories || [];

    const newCategory = { id: Date.now().toString(), name };
    global.state.categories.push(newCategory);

    res.status(201).json(global.state.categories);
}

export async function deleteCategory(req : Request, res : Response) {
    const { id } = req.params;
    if (!global.state || !global.state.categories) {
        return res.status(404).json({ error: 'No categories found' });
    }

    const index = global.state.categories.findIndex((cat : Category) => cat.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const deletedCategory = global.state.categories.splice(index, 1)[0];
    res.json(deletedCategory);
}

export async function updateCategory(req : Request, res : Response) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    if (!global.state || !global.state.categories) {
        return res.status(404).json({ error: 'No categories found' });
    }

    const category = global.state.categories.find((cat : Category) => cat.id === id);
    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }

    category.name = name;
    res.json(category);
}