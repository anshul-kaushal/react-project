import React, {useContext} from 'react'
import Image from 'components/Image'
import ProductContext from "contexts/singleproduct"
import remove from 'img/remove.svg'
import removeHover from 'img/remove-hover.svg'

const CartCard = ({data}) => {

    const {name, priceInCAD, rating, descripiton, img} = data

    const deleteProduct = useContext(ProductContext)
    const deletingFromCart= deleteProduct.deleteFromCart

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

    return (
            <section className="cart-card-section">
                <div className="cart-product-title">
                    <h2>{name}</h2>
                </div>
                <Image src={img.src} alt={img.alt} className="cart-card-image"/>
                <div className="cart-price-and-rating">
                <Price />
                <div className="cart-product-rating">
                <Rating />
                </div>
                </div>
                <div className="cart-remove-button">
                    <input type="image" src= {remove} className="cart-remove" onClick={() => deletingFromCart(name)}/>
                    <input type="image" src= {removeHover} className="cart-remove-hover" onClick={() => deletingFromCart(name)}/>
                </div>
            </section>   
    )
}

export default CartCard