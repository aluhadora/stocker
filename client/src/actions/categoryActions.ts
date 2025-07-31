import type { Category } from "../dataModels/categories";

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch('http://localhost:3005/api/categories');
    const data = await res.json();
    if (Array.isArray(data)) {
        return data;
    } else {
        console.error('Invalid categories data from server:', data);
        return [];
    }
}

export async function addCategory(category: Category): Promise<Category[]> {
    const res = await fetch('http://localhost:3005/api/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });
    if (!res.ok) {
        throw new Error(`Failed to add category: ${res.statusText}`);
    }
    return fetchCategories();
}

export async function editCategory(category: Category): Promise<Category[]> {
    const res = await fetch(`http://localhost:3005/api/categories/${category.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });
    if (!res.ok) {
        throw new Error(`Failed to edit category: ${res.statusText}`);
    }
    return fetchCategories();
}

export async function deleteCategory(categoryId: string): Promise<Category[]> {
    const res = await fetch(`http://localhost:3005/api/categories/${categoryId}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`Failed to delete category: ${res.statusText}`);
    }
    return fetchCategories();
}
