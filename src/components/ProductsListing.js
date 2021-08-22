import React, {useState} from 'react'
import ProductCard from 'components/ProductCard'
import previous from 'img/prev.svg'
import next from 'img/next.svg'

const ProductsListing = ({products}) => {
    const productsOnAPage = 10;
    const [currentPage, setCurrentPage] = useState([1]);

    const firstList = (currentPage - 1) * productsOnAPage
    const lastList = firstList + productsOnAPage
    const totalPages = Math.ceil(products.length / productsOnAPage)

  const updatePage = (page) => {
      if (page < 0) 
        setCurrentPage(1)
      else if (page > totalPages) 
        setCurrentPage(totalPages)
      else 
        setCurrentPage(page)
  }

  const totalProducts = products.slice(firstList,lastList).map((product) => <ProductCard key={product.bookTitle} data={product} />)
    return (
        <section id="products" className="product-listing">
            {totalProducts}
            <div className='pagination'>
            <input type='image' onClick={()=> updatePage(currentPage+1)} src={previous} disabled={(currentPage === 1 )?`disabled`:``}/>
            <p className="pagination-text">
            {totalProducts.length} of {products.length} products
            </p>
            <input type='image' onClick={()=> updatePage(currentPage+1)} src={next} disabled={(currentPage === totalPages )?`disabled`:``}/>
            </div>
        </section>
    )
}

export default ProductsListing