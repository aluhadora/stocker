import type { Product } from "../dataModels/products";

type EditProductControlProps = {
    product: Product;
    editProduct: (newProduct: Product) => void;
};

export default function EditProductControl({ product, editProduct }: EditProductControlProps) {

    return (
        <div>
            <div>
                <strong>Editing Product:</strong> {product.name} (ID: {product.id})
            </div>
            <div>
                <input
                    type="text"
                    value={product.name}
                    onChange={(e) => editProduct({ ...product, name: e.target.value })}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={product.category}
                    onChange={(e) => editProduct({ ...product, category: e.target.value })}
                />
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