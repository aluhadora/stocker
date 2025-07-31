import type { Category } from "../dataModels/categories";
import type { Product } from "../dataModels/products";
import ListItem from "./listItem";
import ProductEditControl from "./productEditControl";

type ProductListItemProps = {
    product: Product;
    updateProduct: (product: Product) => void;
    commitProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
    categories: Category[];
};

export default function ProductListItem({ product, updateProduct, commitProduct, deleteProduct, categories }: ProductListItemProps) {
  return (
    <ListItem
      canDelete={true}
      onDelete={() => deleteProduct(product.id)}
      canEdit={true}
      commit={() => commitProduct(product)}
      editControl={<ProductEditControl product={product} editProduct={updateProduct} categories={categories} />} >
      {product.name}
    </ListItem>
  )
}