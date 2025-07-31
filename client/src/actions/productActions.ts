import type { Product } from "../dataModels/products";

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/products`);
    const data = await res.json();
    if (Array.isArray(data)) {
        return data;
    } else {
        console.error('Invalid products data from server:', data);
        return [];
    }
}

export async function addProduct(product: Product): Promise<Product[]> {
    const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    if (!res.ok) {
        throw new Error(`Failed to add product: ${res.statusText}`);
    }
    return fetchProducts();
}

export async function editProduct(product: Product): Promise<Product[]> {
    const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/products/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    if (!res.ok) {
        throw new Error(`Failed to edit product: ${res.statusText}`);
    }
    return fetchProducts();
}

export async function deleteProduct(productId: string): Promise<Product[]> {
    const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/products/${productId}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`Failed to delete product: ${res.statusText}`);
    }
    return fetchProducts();
}
