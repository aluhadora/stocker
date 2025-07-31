import type { Category } from "../dataModels/categories";
import type { Product } from "../dataModels/products";

type EditProductControlProps = {
    product: Product;
    editProduct: (product: Product) => void;
    categories: Category[];
};

export default function EditProductControl({ product, editProduct, categories }: EditProductControlProps) {

    return (
        <div>
            <div>
                <strong>Editing Product:</strong> {product.name} (ID: {product.id})
            </div>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={product.name}
                    onChange={(e) => editProduct({ ...product, name: e.target.value })}
                />
            </div>
            <div>
                <label>Category: </label>
                <select
                    value={product.category}
                    onChange={(e) => editProduct({ ...product, category: e.target.value })}
                >
                    <option value="">-- Select Category --</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Typical Expiration: </label>
                <input
                    type="number"
                    value={product.typicalExpirationValue}
                    onChange={(e) => editProduct({ ...product, typicalExpirationValue: parseInt(e.target.value) })}
                />
                <select
                    value={product.typicalExpirationUnit}
                    onChange={(e) => editProduct({ ...product, typicalExpirationUnit: e.target.value as 'days' | 'weeks' | 'months' | 'years' })}
                >
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                </select>
            </div>
        </div>
    );
}