export async function getCategories(req, res) {
    if (!global.state || !global.state.categories) {
        global.state = global.state || {};
        global.state.categories = [];
    }
    
    res.json(global.state.categories);
}

export async function addCategory(req, res) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    global.state = global.state || {};
    global.state.categories = global.state.categories || [];

    const newCategory = { id: Date.now().toString(), name };
    global.state.categories.push(newCategory);

    res.status(201).json(newCategory);
}

export async function deleteCategory(req, res) {
    const { id } = req.params;
    if (!global.state || !global.state.categories) {
        return res.status(404).json({ error: 'No categories found' });
    }

    const index = global.state.categories.findIndex(cat => cat.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const deletedCategory = global.state.categories.splice(index, 1)[0];
    res.json(deletedCategory);
}

export async function updateCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    if (!global.state || !global.state.categories) {
        return res.status(404).json({ error: 'No categories found' });
    }

    const category = global.state.categories.find(cat => cat.id === id);
    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }

    category.name = name;
    res.json(category);
}