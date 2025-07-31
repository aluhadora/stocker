import CategoriesList from "../components/categoriesList";
import type { Category } from "../dataModels/categories";
import * as categoryActions from "../actions/categoryActions";

export default function ProductCategories({ categories, setCategories }: { categories: Category[], setCategories: React.Dispatch<React.SetStateAction<Category[]>> }) {
    const editCategory = (category: Category) => {
        categoryActions.editCategory(category).then(updatedCategories => {
            setCategories(updatedCategories);
        });

    }

    const deleteCategory = (category: Category) => {
        categoryActions.deleteCategory(category.id).then(updatedCategories => {
            setCategories(updatedCategories);
        });
    }

    const addCategory = (category: Category) => {
        categoryActions.addCategory(category).then(updatedCategories => {
            setCategories(updatedCategories);
        });
    }

    return (
        <div>
            <h1>Product Categories Page</h1>
            <CategoriesList categories={categories} editCategory={editCategory} deleteCategory={deleteCategory} addCategory={addCategory} />
        </div>
    )
}