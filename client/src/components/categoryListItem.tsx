import type { Category } from "../dataModels/categories";
import ListItem from "./listItem";

type CategoryListItemProps = {
    category: Category;
    editCategory: (category: Category) => void;
    deleteCategory: (categoryToDelete: Category) => void;
};

export default function CategoryListItem({ category, editCategory, deleteCategory }: CategoryListItemProps) {
    return (
        <ListItem
            canDelete={true}
            onDelete={() => deleteCategory(category)}
            canEdit={true}
            editControl={<input type="text" defaultValue={category.name}
                onBlur={(e) => editCategory({ ...category, name: e.target.value })} />} >
            {category.name}
        </ListItem>
    )
}