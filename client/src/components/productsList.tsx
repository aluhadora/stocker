import { useState } from "react";
import type { Product } from "../dataModels/products";
import ProductListItem from "./productListItem";
import ProductEditControl from "./productEditControl";
import type { Category } from "../dataModels/categories";

type ProductsListProps = {
    products: Product[];
    updateProduct: (product: Product) => void;
    commitProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
    categories: Category[];
}

export default function ProductsList({ products, updateProduct, commitProduct, deleteProduct, categories }: ProductsListProps) {
    const [addingNew, setAddingNew] = useState(false);
    const [newProduct, setNewProduct] = useState<Product>({ id: '', name: '', category: '', typicalExpirationValue: 0, typicalExpirationUnit: 'days' });

    const handleAddNewProduct = () => {
        if (newProduct.name.trim() === '' || newProduct.category.trim() === '') {
            alert("Name and category are required.");
            return;
        }
        commitProduct(newProduct);
        setNewProduct({ id: '', name: '', category: '', typicalExpirationValue: 0, typicalExpirationUnit: 'days' });
        setAddingNew(false);
    }

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <ProductListItem
                        key={product.id}
                        product={product}
                        updateProduct={updateProduct}
                        commitProduct={commitProduct}
                        deleteProduct={deleteProduct}
                        categories={categories}
                    />
                ))}
            </ul>
            {addingNew && (
                <ProductEditControl product={newProduct} editProduct={setNewProduct} categories={categories} />
            )}
            {!addingNew && <button onClick={() => setAddingNew(true)}>Add New Product</button>}
            {addingNew && <button onClick={handleAddNewProduct}>Save</button>}

        </div>
    )
}