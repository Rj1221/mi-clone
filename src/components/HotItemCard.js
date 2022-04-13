import React from 'react'
import '../styles/HotItemCard.css'
function HotItemCard ( { name, price, image, index } ) 
{
  return (
    <div className="HotItemCard">
      <img src={ image } alt={ `${ index } product` } />
      <p>{ name }</p>
      <span>{ price }</span>
    </div>
  )
}

export default HotItemCard