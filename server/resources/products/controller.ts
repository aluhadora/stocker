import { Request, Response } from 'express';
import { Product } from '../../dataModels/products';

export async function getProducts(_req: Request, res: Response) {
    if (!global.state || !global.state.products) {
        global.state = global.state || {};
        global.state.products = [];
    }

    res.json(global.state.products);
}

export async function addProduct(req: Request, res: Response) {
    const product = req.body as Partial<Product>;
    if (!product.name) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    console.log("Adding product with name:", product.name);

    global.state = global.state || {};
    global.state.products = global.state.products || [];

    const newProduct = { id: Date.now().toString(), ...product } as Product;
    newProduct.id = Date.now().toString();
    newProduct.createdAt = new Date().toISOString();
    newProduct.updatedAt = new Date().toISOString();
    global.state.products.push(newProduct);

    res.status(201).json(global.state.products);
}

export async function deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    if (!global.state || !global.state.products) {
        return res.status(404).json({ error: 'No products found' });
    }

    const index = global.state.products.findIndex((prod: Product) => prod.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const deletedProduct = global.state.products.splice(index, 1)[0];
    res.json(deletedProduct);
}

export async function updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const productData = req.body as Partial<Product>;

    console.log("Updating product with id:", id, "and data:", productData);

    if (!productData.name) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    if (!global.state || !global.state.products) {
        return res.status(404).json({ error: 'No products found' });
    }

    const product = global.state.products.find((prod: Product) => prod.id === id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    // Update fields
    product.name = productData.name;
    product.category = productData.category || product.category;
    product.typicalExpirationValue = productData.typicalExpirationValue !== undefined ? productData.typicalExpirationValue : product.typicalExpirationValue;
    product.typicalExpirationUnit = productData.typicalExpirationUnit || product.typicalExpirationUnit;
    product.updatedAt = new Date().toISOString();

    res.json(global.state.products);
}