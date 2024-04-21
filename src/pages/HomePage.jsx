import React from 'react'
import Layout from '../components/Layout'
import Products from '../components/Products'
import Categories from '../components/Categories'
import Category from '../components/Category'


const HomePage = () => {
  return (
    <Layout>
      <Category/>
      <Products/>
    </Layout>
  )
}

export default HomePage