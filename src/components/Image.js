import React, {useState} from 'react'

const Image = ({src, alt, ...attr}) => {

  // State will hold the image url
  const [img, setImg] = useState(``)
  //let img = null

  if (src) {
    import(`img/${src}`).then((image) => setImg(image.default))
    //img = require(`img/${src}`).default
  }

  return (
    <img src={img} alt={alt} {...attr} />
  )
}

export default Image
