export async function getProducts(req, res) {
    if (!global.state || !global.state.products ) {
        global.state = global.state || {};
        global.state.products = [];
    }

    res.json(global.state.products);
}

export async function addProduct(req, res) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    global.state = global.state || {};
    global.state.products = global.state.products || [];

    const newProduct = { id: Date.now().toString(), name };
    global.state.products.push(newProduct);

    res.status(201).json(newProduct);
}

export async function deleteProduct(req, res) {
    const { id } = req.params;
    if (!global.state || !global.state.products) {
        return res.status(404).json({ error: 'No products found' });
    }

    const index = global.state.products.findIndex(prod => prod.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const deletedProduct = global.state.products.splice(index, 1)[0];
    res.json(deletedProduct);
}

export async function updateProduct(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    if (!global.state || !global.state.products) {
        return res.status(404).json({ error: 'No products found' });
    }

    const product = global.state.products.find(prod => prod.id === id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    product.name = name;
    res.json(product);
}