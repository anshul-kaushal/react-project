import React, {useContext, useState} from 'react'
import Layout from 'components/Layout'
import FavouriteCard from 'components/FavouriteCard'
import ProductContext from 'contexts/singleproduct'

const Favourites = () => {

    const favourite= useContext(ProductContext)
    const favouriteProducts = favourite.favourite
    const updateFavourite = favouriteProducts.map((product) => <FavouriteCard key={product.name} data={product} />)
    
    const NoItem = () => {
        return(
            <div class="special-case">
                No items in favourites
            </div>
        )
    }

    return (
    // <article className="layout-cart">
    //     <Header />
    //     <div className="cart-page">
    //         <h1 className="shopping-cart-h1">Favourites</h1>
    //         {updateFavourite.length > 0 ? updateFavourite: 'There are no items in your favourites.'}
    //     </div>
    //     <div className="footer-cart">
    //         <Footer />
    //     </div>
    // </article>
    <Layout>
        <article className="cart-card-article">
        <h1>Favourites</h1>
        <div className="cart-card-wrapper">
        {updateFavourite.length > 0 ? updateFavourite: <NoItem />}
        </div>
        </article>
    </Layout>
    )
}

export default Favourites