import React, {useState} from 'react'
import ProductCard from 'components/ProductCard'

const ProductsListing = ({products}) => {
    const totalProducts = products.map((product) => <ProductCard data={product} />)
    return (
        <section id="products" className="product-listing">
            {totalProducts}

            <p className="pagination-text">
            {totalProducts.length} of {products.length} products
            </p>
        </section>
    )
}

export default ProductsListing