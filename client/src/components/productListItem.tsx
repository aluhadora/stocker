import type { Product } from "../dataModels/products";
import ListItem from "./listItem";
import ProductEditControl from "./productEditControl";

type ProductListItemProps = {
    product: Product;
    editProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
};

export default function ProductListItem({ product, editProduct, deleteProduct }: ProductListItemProps) {
  return (
    <ListItem
      canDelete={true}
      onDelete={() => deleteProduct(product.id)}
      canEdit={true}
      editControl={<ProductEditControl product={product} editProduct={editProduct} />} >
      {product.name}
    </ListItem>
  )
}