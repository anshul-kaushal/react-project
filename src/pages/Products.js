import React, {useState} from 'react'
import Layout from 'components/Layout'
import ProductsListing from 'components/ProductsListing'

const Products = ({data}) => {
    const [filterState, setFilterState] = useState({
        query: ``,
        minPrice: 0,
        minRating: 0,
        // priceSort: (a, b) => a.priceInCAD.discounted - b.priceInCAD.discounted,
        // ratingSort: (a, b) => a.rating - b.rating
        priceSort: (a, b) => null,
        ratingSort: (a, b) => null
      })
    const {query, minPrice, minRating, priceSort, ratingSort} = filterState
    const showFilterBar = ({target}) => {
        console.log(target);
    }
    const handleSearchChange = ({target}) => {
        setFilterState({
            ...filterState,
            query: target.value
          })
    }
    const handleMinRatingChange = ({target}) => {
        //setMinGpa(Number(event.target.value))
    
        setFilterState({
          ...filterState,
          minRating: Number(target.value),
        })
      }
    
    const handleMinPriceChange = ({target}) => {
        setFilterState({
            ...filterState,
            minPrice: Number(target.value)
        })
    }

    const handleSortChange = ({target}) => {
        let value = Number(target.value)
        let sorting
        if(value == 0 || value == 1){
            if (value == 0) {
                sorting = (a, b) => a.priceInCAD.original - b.priceInCAD.original
            } else {
                sorting = (a, b) => b.priceInCAD.original - a.priceInCAD.original
            }
            setFilterState({
                ...filterState,
                priceSort: sorting
            })
            
        }
        else if(value == 10 || value == 11){
            if (value == 10) {
                sorting = (a,b) => a.rating - b.rating
            }
            else {
                sorting = (a,b) => b.rating - a.rating
            }
            setFilterState({
                ...filterState,
                ratingSort: sorting
            })
        }
    }
    const productsListing = data.
                                filter(({name}) => name.toUpperCase().includes(query.toUpperCase())).
                                filter(({rating}) => rating >= minRating).
                                filter(({priceInCAD}) => priceInCAD.discounted >= minPrice).
                                sort(priceSort).
                                sort(ratingSort)
    return (
        <Layout>
        <div class="filter-container">
        {/* <button onClick={showFilterBar}>filter and sort</button> */}
        <section class="filter">
        <div className="search searchbox">
              <input type="search" name="find" id="find" placeholder="search product" autoComplete="off" value={query} onChange={handleSearchChange} />
        </div>
        <div className="minimum-rating">
        <div className="rating-slider">
        <input type="range" min="0" max="5" value={minRating} step = "0.5" id="filter-rating" onChange={handleMinRatingChange}/>
        </div>
        <div className="min-rating-value">
        <output for="filterRating">Minimum Rating: {minRating}</output> 
        </div>
        </div>
        <div className="minimum-rating">
        <div className="rating-slider">
        <input type="range" min="0" max="100" value={minPrice} step = "1" id="filter-rating" onChange={handleMinPriceChange}/>
        </div>
        <div className="min-rating-value">
        <output for="filterRating">Minimum price: ${minPrice}</output> 
        </div>
        </div>
        <div>
          <select class="sort-select" name="sort" id="sort" defaultValue="2" onChange={handleSortChange}>
            <option disabled selected value="2">Price and Rating</option>
            <option value="1">Price, highest to lowest</option>
            <option value="0">Price, lowest to highest</option>
            <option value="10">Rating, lowest to highest</option>
            <option value="11">Rating, highest to lowest</option>
          </select>
        </div>
        {/* <input type="image" src="img/add-filter-button.svg" name="submit" class="filter-button" id="add-filter-button" /> */}
        </section>
        </div>
            <ProductsListing products={productsListing}/>
        </Layout>
    )
}

export default Products