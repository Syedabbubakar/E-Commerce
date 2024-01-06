import React, { useContext, useEffect } from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Products from '../components/Products'
import { fetchDataFromApi } from '../api/api'
import { Context } from '../context/Context'


const Home = () => {

  const {products, setProducts, categories, setCategories} = useContext(Context)

  useEffect(()=>{
    getProduct()
    getCategory()
  },[])

  const getProduct = () => {
fetchDataFromApi('/api/products?populate=*').then((res)=>{
  console.log(res);
  setProducts(res);
})
  }
  const getCategory = () => {
fetchDataFromApi('/api/categories?populate=*').then((res)=>{
  console.log(res);
  setCategories(res.data);
})
  }

console.log("aaaaaa", products);
console.log("bbbbbb", categories);
return (
  <div className="cx-home">
    <Banner />
    <Categories categories={categories} />
    <Products products={products} headingText='All Products' />
  </div>
)
}

export default Home