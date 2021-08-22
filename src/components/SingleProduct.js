import React, {useContext} from 'react'
import ProductContext from 'contexts/singleproduct'
import Image from 'components/Image'
import favButton from 'img/fav-button.svg'
import favButtonHover from 'img/fav-button-hover.svg'
import cartButton from 'img/cart-button.svg'
import cartButtonHover from 'img/cart-button-hover.svg'

const SingleProduct = ({data}) => {
    const {name, priceInCAD, rating, description, img} = data

    const cart = useContext(ProductContext)
    const addingToCart = cart.addToCart

    const favourite = useContext(ProductContext)
    const addingToFavourite = favourite.addToFavourite

    const Price = () => {
        if(priceInCAD.discounted == null){
            return <data class = "price" value="${priceInCAD.original}">${priceInCAD.original}</data>
        }
        else{
            return <data class = "price" value="${priceInCAD.discounted}"><del>${priceInCAD.original}</del> <ins>${priceInCAD.discounted}</ins></data>
        }
    }

    const StarFull = () => {
        return <span className="fas fa-star"></span>
    }

    const StarHalf = () => {
        return <span className="fas fa-star-half"></span>
    }

    const Rating = () => {
        
        // for(let i=1; i<=Math.floor(rating); i++){
        //     starRatingString += <StarFull />
        // }
        // if({rating} % 1 != 0){
        //     starRatingString += <StarHalf />
        // }

        switch(rating) {
            case 0.5:
                return <StarHalf />
            case 1:
                return <StarFull />
            case 1.5:
                return (<><StarFull /><StarHalf /></>)
            case 2:
                return (<> <StarFull /><StarFull /> </>)
            case 2.5:
                return (<> <StarFull /><StarFull /><StarHalf /> </>)
            case 3:
                return (<> <StarFull /><StarFull /><StarFull /> </>)
            case 3.5:
                return (<> <StarFull /><StarFull /><StarFull /><StarHalf /> </>)
            case 4:
                return (<> <StarFull /><StarFull /><StarFull /><StarFull /> </>)
            case 4.5:
                return (<> <StarFull /><StarFull /><StarFull /><StarFull /><StarHalf /> </>)
            case 5:
                return (<> <StarFull /><StarFull /><StarFull /><StarFull /><StarFull /> </>)
            default:
                return null
        }
    }

    return(
        <article className="single-product-article">
        <div className="single-product-card">
        <h1 className="single-product-title">{name}</h1>
        <Image src={img.src} alt={img.alt} className="single-product-image"/>
        <div className="single-product-price-and-rating">
        <Price />
        <div className="single-product-rating">
        <Rating />
        </div>
        </div>
        <div className="single-product-text-wrapper">
        <p className="single-product-text" lang="zxx">{description}</p>
        </div>
        <div class="single-product-buttons">
        <div className="add-to-fav-button">
        <input type="image" onClick={() => addingToFavourite(name)} name="button" src={favButton} class="add-to-fav"/>
        <input type="image" onClick={() => addingToFavourite(name)} name="button" src={favButtonHover} class="add-to-fav-hover"/>
        </div>
        <div className="add-to-cart-button">
        <input type="image" onClick={() => addingToCart(name)} name="button" src={cartButton} class="add-to-cart"/>
        <input type="image" onClick={() => addingToCart(name)} name="button" src={cartButtonHover} class="add-to-cart-hover"/>
        </div>
        </div>
        </div>
        </article>
    )
}

export default SingleProduct