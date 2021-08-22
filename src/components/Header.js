import React, {useContext} from 'react';
import logo from 'img/ak-logo.svg'
import ProductContext from 'contexts/singleproduct.js'
import CartCard from 'components/CartCard'
import FavouriteCard from 'components/FavouriteCard'
import {Link} from 'react-router-dom'
// import icon from 'img/preloader_time-icon.svg'

// console.log(logo);
// console.log(allProducts);
// console.log(icon)

const Header = () => {
  const {data} = useContext(ProductContext)
	const cart = useContext(ProductContext)
	const favourite = useContext(ProductContext)

	const cartProducts = cart.cart
	const favouriteProducts = favourite.favourite

	const updateCart = cartProducts.map((product) => <CartCard key={product.name} data={product} />)
	const updateFavourite = favouriteProducts.map((product) => <FavouriteCard key={product.name} data={product} />)
    return (
    <header className="page-header">
        {/* <div class = "upper-bar">
        <div class = "logo">
            <a href="index.html"> <img src={logo} alt="Logo for brand" /> </a>
        </div>
        <nav aria-label="Primary" className="navigation">
          <ul className="menu">
            <li class = "hide"><a href="#">about</a></li>
            <li class = "hide"><a href="#">contact</a></li>
            <li class = "hide"><a href="#">services</a></li>
            <li class = "menu-dots-item">
              <span className = "menu-dots" id="menu">
              <i className="fas fa-ellipsis-v"></i>
            </span>
            </li>
          </ul>
        </nav>
        </div>
        <div id="menu-dropdown" className="menu-dropdown-content">
            <a href="#">About</a>
            <a href="#">services</a>
            <a href="#">contact</a>
        </div> */}
        <nav className="upper-bar-nav">
            <Link to={'/'}>
            <img src={logo} alt="logo" className="ak-logo"/>
            </Link>
            <ul className="nav-content">
                <li>
                    {/* <a href="index.html">home.</a> */}
                    <Link to={'/cart'} className="fav-and-cart">
                    <span>{updateCart.length}</span>
                    <i className="fas fa-shopping-cart"></i>
                    </Link>
                </li>
                <li>
                    <Link to={'/favourites'} className="fav-and-cart">
                    <span>{updateFavourite.length}</span>
                    <i className="fas fa-heart"></i>
                    </Link>
                </li>
            </ul>
            <ul className="nav-content-large">
              <li>
              <Link to={'/cart'} className="fav-and-cart">
                <div className="cart-nav">
                <div>
                    <span>{updateCart.length}</span>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div>
                  my cart
                </div>
                </div>
              </Link>
              </li>
              <li>
              <Link to={'/favourites'} className="fav-and-cart">
                <div className="fav-nav">
                <div>
                    <span>{updateFavourite.length}</span>
                    <i className="fas fa-heart"></i>
                </div>
                <div>
                  Favourites
                </div>
                </div>
              </Link>
              </li>
            </ul>
        </nav>
  
        <div className = "lower-bar">
          <h1 className="heading">Products</h1>
        </div>
    </header> 
    )
}

export default Header