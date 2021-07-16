import React, {useState} from 'react'
import Layout from 'components/Layout'
import ProductsListing from 'components/ProductsListing'

const Products = ({data}) => {
    const productsListing = data
    return (
        <Layout>
        <section class="filter">
        <div className="search searchbox">
              <input type="search" name="find" id="find" placeholder="search product" />
        </div>
        <div className="minimum-rating">
        <div className="rating-slider">
        <input type="range" min="0" max="5" value="3" step = "0.5" id="filter-rating" />
        </div>
        <div className="min-rating-value">
        <output for="filterRating">Minimum Rating: 3</output> 
        </div>
        </div>
        <div className="minimum-rating">
        <div className="rating-slider">
        <input type="range" min="0" max="100" value="0" step = "1" id="filter-rating" />
        </div>
        <div className="min-rating-value">
        <output for="filterRating">Minimum price: $0.0</output> 
        </div>
        </div>
        {/* <input type="image" src="img/add-filter-button.svg" name="submit" class="filter-button" id="add-filter-button" /> */}
        </section>
            <ProductsListing products={productsListing} />
        </Layout>
    )
}

export default Products