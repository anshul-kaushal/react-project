import React, {useState} from 'react'
import Layout from 'components/Layout'
import ProductsListing from 'components/ProductsListing'

const Products = ({data}) => {
    const productsListing = data
    return (
        <Layout>
            <ProductsListing products={productsListing} />
        </Layout>
    )
}

export default Products