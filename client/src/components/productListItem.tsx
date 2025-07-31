import type { Product } from "../dataModels/products";
import ListItem from "./listItem";
import ProductEditControl from "./productEditControl";

type ProductListItemProps = {
    product: Product;
    updateProduct: (product: Product) => void;
    commitProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
};

export default function ProductListItem({ product, updateProduct, commitProduct, deleteProduct }: ProductListItemProps) {
  return (
    <ListItem
      canDelete={true}
      onDelete={() => deleteProduct(product.id)}
      canEdit={true}
      commit={() => commitProduct(product)}
      editControl={<ProductEditControl product={product} editProduct={updateProduct} />} >
      {product.name}
    </ListItem>
  )
}