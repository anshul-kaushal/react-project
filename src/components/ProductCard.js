import React, {useState} from 'react'
import learnMore from '../img/learn-more.svg'
import learnMoreHover from '../img/learn-more-hover.svg'
import {Link} from 'react-router-dom'

console.log(learnMore)
console.log(learnMoreHover)

const ProductCard = ({data}) => {

    const {name, priceInCAD, rating, description, img} = data
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

    const [productImg, setImg] = useState(``)
    import (`img/${img.src}`).then((image) => setImg(image.default))

    return (
    <article className="product">
    <h2 className="sub-heading">{name}</h2>
    <div className="product-images-container">
    <img className="product-images" src={productImg} alt={img.alt} />
    <div className="cart-and-favorite">
      <button type="button" className="index-favorite-button" aria-label="add product to favorites">
        <i className="far fa-heart"></i>
    </button>
    <button type="button" className="index-add-to-cart-button" aria-label="add 
    product to cart">
      <i className="fas fa-shopping-cart"></i>
    </button>
    </div>
    </div>
    <div className="price-and-rating">
    <Price />
    <div className="rating">
    <Rating />
    </div>
    </div>
    <p className="product-text" lang="zxx">{description}
    </p>
    <div className="learn-more">
    <Link to={`/product/${name}`}>
        <img className="learn-more-button" src={learnMore} alt="button to open the product description page" />
        <img className="learn-more-button-hover" src={learnMoreHover} alt="button to open the product description page" />
    </Link>
    </div>
    </article>
    )
}

export default ProductCard