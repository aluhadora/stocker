import ProductsList from "../components/productsList";
import type { Product } from "../dataModels/products";

export default function ProductsPage({ products, setProducts }: { products: Product[], setProducts: (products: Product[]) => void }) {
    const handleEditProduct = (updatedProduct: Product) => {
        console.log("Editing product:", updatedProduct);
        setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    }
    
    const handleDeleteProduct = (productId: string) => {
        setProducts(products.filter(p => p.id !== productId));
    }

    return (
        <div>
            <h1>Products Page</h1>
            <p>This is where product types will be displayed.</p>
            <ProductsList products={products} editProduct={handleEditProduct} deleteProduct={handleDeleteProduct} />
        </div>
    )
}