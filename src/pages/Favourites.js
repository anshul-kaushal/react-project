import React, {useContext, useState} from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import FavouriteCard from 'components/FavouriteCard'
import ProductContext from 'contexts/singleproduct'

const Favourites = () => {

    const favourite= useContext(ProductContext)
    const favouriteProducts = favourite.fav
    const updateFavourite = favouriteProducts.map((product) => <FavouriteCard key={product.name} data={product} />)
    
    return (
    <article className="layout-cart">
        <Header />
        <div className="cart-page">
            <h1 className="shopping-cart-h1">Favourites</h1>
            {updateFavourite.length > 0 ? updateFavourite: 'There are no items in your favourites.'}
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </article>
    )
}

export default Favourites