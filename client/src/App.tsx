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
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test
        </p>
      </div> */}
      <ProductCategories categories={categories} setCategories={setCategories} />
      <ProductsPage products={products} setProducts={setProducts} />
    </>
  )
}

export default App
