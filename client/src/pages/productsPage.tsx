import ProductsList from "../components/productsList";
import type { Product } from "../dataModels/products";
import * as productActions from '../actions/productActions'
import type { Category } from "../dataModels/categories";

type ProductsPageProps = {
    products: Product[];
    setProducts: (products: Product[]) => void;
    categories: Category[];
};

export default function ProductsPage({ products, setProducts, categories }: ProductsPageProps) {
    const handleUpdateProduct = (updatedProduct: Product) => {
        setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    }

    const handleCommitProduct = (product: Product) => {
        console.log("handleCommitProduct called with:", product);
        // If the product has no ID, we treat it as a new product to be added
        if (!product.id || product.id.trim() === '') {
            return addProduct(product);
        }

        productActions.editProduct(product).then(updatedProducts => {
            setProducts(updatedProducts);
        }).catch(err => {
            console.error("Failed to edit product:", err);
            alert("Failed to edit product. Please try again.");
        });
    }

    const handleDeleteProduct = (productId: string) => {
        productActions.deleteProduct(productId).then(updatedProducts => {
            setProducts(updatedProducts);
        }).catch(err => {
            console.error("Failed to delete product:", err);
            alert("Failed to delete product. Please try again.");
        });
    }

    const addProduct = (newProduct: Product) => {
        productActions.addProduct(newProduct).then(updatedProducts => {
            setProducts(updatedProducts);
        }).catch(err => {
            console.error("Failed to add product:", err);
            alert("Failed to add product. Please try again.");
        });
    }

    return (
        <div>
            <h1>Products Page</h1>
            <ProductsList
                products={products}
                categories={categories}
                updateProduct={handleUpdateProduct}
                commitProduct={handleCommitProduct}
                deleteProduct={handleDeleteProduct} />
        </div>
    )
}