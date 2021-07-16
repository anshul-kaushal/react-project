import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <main className="products">
        <section class="filter">
        <div class="search">
          <form class="searchbox">
              <input type="search" name="find" id="find" placeholder="search product" />
          </form>
          </div>
        <div class="minimum-rating">
        <div class="rating-slider">
        <input type="range" min="0" max="5" value="3" step = "0.5" id="filter-rating" />
        </div>
        <div class="min-rating-value">
        <output for="filterRating">Minimum Rating: 3</output> 
        </div>
        </div>
        <input type="image" src="img/add-filter-button.svg" name="submit" class="filter-button" id="add-filter-button" />
        </section>
            {children}
        </main>
        <Footer />
        </>
    )
}

export default Layout