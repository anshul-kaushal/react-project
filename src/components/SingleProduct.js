import React, {useContext} from 'react'
import ProductContext from 'contexts/singleproduct'
import Image from 'components/Image'
import favButton from 'img/fav-button.svg'
import cartButton from 'img/cart-button.svg'

const SingleProduct = ({data}) => {
    const {name, priceInCAD, rating, description, img} = data

    const cart = useContext(ProductContext)
    const addingToCart = cart.addToCart

    const favourite = useContext(ProductContext)
    const addingToFavourite = favourite.addToFavourite


    return(
        <div>
        <h1>{name}</h1>
        <Image src={img.src} alt={img.alt} />
        <input type="image" onClick={() => addingToFavourite(name)} name="button" src={favButton} />
        <input type="image" onClick={() => addingToCart(name)} name="button" src={cartButton} />
        </div>
    )
}

export default SingleProduct