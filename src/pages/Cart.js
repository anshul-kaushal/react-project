import React, {useContext, useState} from 'react'
import Layout from 'components/Layout'
import CartCard from 'components/CartCard'
import ProductContext from 'contexts/singleproduct'

const Cart = () => {

    const cart= useContext(ProductContext)
    const cartProducts = cart.cart
    const updateCart = cartProducts.map((product) => <CartCard key={product.name} data={product} />)

    const NoItem = () => {
        return(
            <div class="special-case">
                No items in cart
            </div>
        )
    }
    
    return (
    // <article className="layout-cart">
    //     <Header />
    //     <div className="cart-page">
    //         <h1 className="shopping-cart-h1">Shopping Bag</h1>
    //         {updateCart.length > 0 ? updateCart: 'There are no items in your bag.'}
    //     </div>
    //     <div className="footer-cart">
    //         <Footer />
    //     </div>
    // </article>
    <Layout>
        <article className="cart-card-article">
        <h1>Cart</h1>
        <div className="cart-card-wrapper">
        {updateCart.length > 0 ? updateCart: <NoItem />}
        </div>
        </article>
    </Layout>
    )
}

export default Cart