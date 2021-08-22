import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from 'contexts/singleproduct'
import Layout from 'components/Layout'
import SingleProduct from 'components/SingleProduct'

const Product = () => {
    const {slug} = useParams()
    const singleProduct= useContext(ProductContext)
    const product = singleProduct.selectProduct(slug)

    // console.log(product)
    // updating product page with correct book
    const prod = product.find((product) => product.name === slug)
    return(
        <>
            <Layout>
                <SingleProduct data={prod} />
            </Layout>
        </>
    )
}
export default Product