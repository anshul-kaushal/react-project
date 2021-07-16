import React, {useState} from 'react'
import ProductCard from 'components/ProductCard'

const ProductsListing = ({products}) => {
    const totalProducts = products.map((product) => <ProductCard data={product} />)

    return (
        <section id="products" className="product-listing">
            {totalProducts}
        </section>
    )
}

export default ProductsListing