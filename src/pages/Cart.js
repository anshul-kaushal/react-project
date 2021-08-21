import React, {useContext, useState} from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CartCard from 'components/CartCard'
import ProductContext from 'contexts/singleproduct'

const CartPage = () => {

    const cart= useContext(ProductContext)
    const cartProducts = cart.cart
    const updateCart = cartProducts.map((product) => <CartCard key={product.name} data={product} />)
    
    return (
    <article className="layout-cart">
        <Header />
        <div className="cart-page">
            <h1 className="shopping-cart-h1">Shopping Bag</h1>
            {updateCart.length > 0 ? updateCart: 'There are no items in your bag.'}
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </article>
    )
}

export default CartPage