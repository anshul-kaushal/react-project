import React, {useContext, useState} from 'react'
import Layout from 'components/Layout'
import gif from 'img/gif.gif'

const FourOFour =() => {
    return (
        <Layout>
            <article className="fourOfour">
                <img src={gif} alt="page not found" className="never-gonna-give-you-up" />
            </article>
        </Layout>
    )
}
export default FourOFour