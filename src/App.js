import React, { useEffect, useState, useContext} from 'react'
// import './css/App.css'
// import test from 'img/test.jpg'
// import './css/App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ProductContext from 'contexts/singleproduct'
import CartContext from 'contexts/cart'
// import CartContext from 'contexts/cart'
import Products from './pages/Products'
import firebase from 'utils/firebase'
import Product from 'pages/Product'
import Cart from 'pages/Cart'
import Favourites from 'pages/Favourites'
import FourOFour from 'pages/FourOFour'


const App = () => {
const [loading, setLoading] = useState(true)
const [products, setProducts] = useState([])

  const db = firebase.firestore()

    // Runs only once, after the first render
    useEffect(() => {

    console.log(`Loading...`)
    setLoading(true)
      
    db.collection(`products`).get().then((snapshot) => {
        setProducts(
          snapshot.docs.reduce((products, doc) => [...products, doc.data()], [])
        )
      
        setLoading(false)
      })
    }, [])

  const userData = {
    name: 'Anshul'
  }

  const updateUserName = (name) => {
    userData.name = name;
  }

  const [cart, setCart] = useState([])

  const addingTwice = (selectedProductName, toWhat) => {
	  alert(`Can't add ${selectedProductName} to the ${toWhat} twice`)
  }
  const addToCart = (selectedProductName) => {
	if (cart.length != 0){
		const productExists = cart.filter((cartProduct) => selectedProductName === cartProduct.name);
		if (productExists.length > 0) {
			addingTwice(selectedProductName, 'cart');
			return
		}
	}
    const cartPage = products.find((product) => product.name === selectedProductName)
    return (
      setCart([...cart, cartPage])
    )
  }
  const [favourite, setFavourite] = useState([])

  const addToFavourite= (selectedProductName) => {
	if (favourite.length != 0){
		const productExists = favourite.filter((favouriteProduct) => selectedProductName === favouriteProduct.name);
		if (productExists.length > 0) {
			addingTwice(selectedProductName, 'favourite');
			return
		}
	}
    const favourites = products.find((product) => product.name === selectedProductName)
    return (
      setFavourite([...favourite, favourites])
    )
  }

  // on click do not include this product
  const deleteFromCart = (selectedProductName) => {
	console.log(cart);
    const delCartProduct = cart.filter((product) => product.name !== selectedProductName)
    return (
      setCart(delCartProduct)
    )
  }

  const deleteFromFavourite = (selectedProductName) => {
    const delFavouriteProduct = favourite.filter((product) => product.name !== selectedProductName)
    return (
      setFavourite(delFavouriteProduct)
    )
  }

  const selectProduct = () => {
    const productPage = products.filter((product) => product.name === product.name)
    return (
      productPage
    )
  }

	// const productOne = {
	// 	name: 'journal',
	// 	priceInCAD: {
	// 		original: 29,
	// 		discounted: 20,
	// 	},
	// 	rating: 4,
	// 	description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem facilis voluptates labore doloremque molestiae maiores, itaque repellat, harum, excepturi cupiditate voluptas maxime. Quam excepturi aliquam dolore quidem voluptatibus? Officia.',
	// 	img: {
	// 		src: 'journal.jpg',
	// 		alt: 'image of a journal'
	// 	}
	// }
	
	// const productTwo = {
	// 	name: 'smart wallet',
	// 	priceInCAD: {
	// 		original: 40,
	// 		discounted: 35,
	// 	},
	// 	rating: 4.5,
	// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
	// 	img: {
	// 		src: 'wallet.jpg',
	// 		alt: 'image of wallet'
	// 	}
	// }
	
	// const productThree = {
	// 	name: 't-shirt',
	// 	priceInCAD: {
	// 		original: 30,
	// 		discounted: 28,
	// 	},
	// 	rating: 5,
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates, harum, libero est quia ipsam blanditiis in eaque recusandae nesciunt tempore. Tenetur, veritatis! Nesciunt inventore optio numquam harum quia possimus.',
	// 	img: {
	// 		src: 't-shirts.jpg',
	// 		alt: 'image of t-shirts'
	// 	}
	// }
	
	// const productFour = {
	// 	name: 'smart wrist-band',
	// 	priceInCAD: {
	// 		original: 100,
	// 		discounted: 96,
	// 	},
	// 	rating: 5,
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates, harum, libero est quia ipsam blanditiis in eaque recusandae nesciunt tempore. Tenetur, veritatis! Nesciunt inventore optio numquam harum quia possimus.',
	// 	img: {
	// 		src: 'band.jpg',
	// 		alt: 'image of a band',
	// 	}
	// }
	
	// const productFive = {
	// 	name: 'fountain pen',
	// 	priceInCAD: {
	// 		original: 15,
	// 		discounted: 14,
	// 	},
	// 	rating: 3.5,
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates, harum, libero est quia ipsam blanditiis in eaque recusandae nesciunt tempore. Tenetur, veritatis! Nesciunt inventore optio numquam harum quia possimus.',
	// 	img: {
	// 		src: 'pen.jpg',
	// 		alt: 'image of a pen',
	// 	}
	// }
	
	// const productSix = {
	// 	name: 'pocket watch',
	// 	priceInCAD: {
	// 		original: 10,
	// 		discounted: 7,
	// 	},
	// 	rating: 4,
	// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
	// 	img: {
	// 		src: 'pocket-watch.jpg',
	// 		alt: 'image of a pocket watch',
	// 	}
	// }
	
	// const productSeven = {
	// 	name: 'wayfarer',
	// 	priceInCAD: {
	// 		original: 25,
	// 		discounted: null,
	// 	},
	// 	rating: 4,
	// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
	// 	img: {
	// 		src: 'wayfarers.jpg',
	// 		alt: 'image of wayfarer sunglasses',
	// 	}
	// }
	
	// const productEight = {
	// 	name: 'studio headphones',
	// 	priceInCAD: {
	// 		original: 200,
	// 		discounted: 190,
	// 	},
	// 	rating: 5,
	// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
	// 	img: {
	// 		src: 'headphones.jpg',
	// 		alt: 'image of headphones',
	// 	}
	// }
	
	// const productNine = {
	// 	name: 'backpack',
	// 	priceInCAD: {
	// 		original: 40,
	// 		discounted: 38,
	// 	},
	// 	rating: 4.5,
	// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
	// 	img: {
	// 		src: 'backpack.jpg',
	// 		alt: 'image of a backpack',
	// 	}
	// }
	
	// const productTen = {
	// 	name: 'minimalist mug',
	// 	priceInCAD: {
	// 		original: 7,
	// 		discounted: 6,
	// 	},
	// 	rating: 4.5,
	// 	description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem facilis voluptates labore doloremque molestiae maiores, itaque repellat, harum, excepturi cupiditate voluptas maxime. Quam excepturi aliquam dolore quidem voluptatibus? Officia.',
	// 	img: {
	// 		src: 'mug.jpg',
	// 		alt: 'image of a mug',
	// 	}
	// }
	let contextValue = {data:products, data:userData, updateUserName:updateUserName, selectProduct:selectProduct, cart:cart, favourite:favourite, addToCart:addToCart, addToFavourite:addToFavourite, deleteFromCart:deleteFromCart, deleteFromFavourite:deleteFromFavourite}
	
	// array of products
	// const products = [productOne, productTwo, productThree, productFour, productFive, productSix, productSeven, productEight, productNine, productTen];
	return (
		<Router>
			<ProductContext.Provider value= {contextValue}>
			<Switch>
			<Route exact path="/"><Products data={products} /></Route>
			<Route exact path="/product/:slug"><Product /></Route>
			<Route exact path="/cart"><Cart /></Route>
          	<Route exact path="/favourites"><Favourites /></Route>
			<Route path="*"><FourOFour /></Route>
			</Switch>
			</ProductContext.Provider>
		</Router>
	)
}

export default App