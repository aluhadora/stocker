import type { Category } from "../dataModels/categories";
import CategoryListItem from "./categoryListItem";

type CategoryListItemProps = {
    categories: Category[];
    editCategory: (category: Category) => void;
    deleteCategory: (category: Category) => void;
    addCategory: (category: Category) => void;
};

export default function CategoriesList({ categories, editCategory, deleteCategory, addCategory }: CategoryListItemProps) {
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <CategoryListItem key={category.id} category={category} editCategory={editCategory} deleteCategory={deleteCategory} />
                ))}
                <li>
                    <input type="text" placeholder="New Category" onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                            addCategory({ name: e.currentTarget.value.trim() } as Category);
                            e.currentTarget.value = '';
                        }
                    }} />
                </li>
            </ul>
        </div>
    )
}