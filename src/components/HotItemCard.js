import React from 'react'
import '../styles/HotItemCard.css'
function HotItemCard ( { name, price, img, index } ) 
{
  return (
    <div className="HotItemCard">
      <img src={ img } alt={ `${ index } product` } />
      <p>{ name }</p>
      <span>{ price }</span>
    </div>
  )
}

export default HotItemCard