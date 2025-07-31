import { useEffect, useState } from 'react'
import './App.css'
import ProductCategories from './pages/productCategories'
import * as categoryActions from './actions/categoryActions'
import * as productActions from './actions/productActions'
import { type Category } from './dataModels/categories'
import type { Product } from './dataModels/products'
import ProductsPage from './pages/productsPage'

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]); // Placeholder for products state

  useEffect(() => {
    categoryActions.fetchCategories().then(setCategories);
    productActions.fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <ProductCategories categories={categories} setCategories={setCategories} />
      <ProductsPage products={products} setProducts={setProducts} categories={categories} />
    </>
  )
}

export default App
