import React from 'react'
import '../styles/HotAccessories.css'
import HotItemCard from './HotItemCard'
function HotAccessories ( { music, musicCover } )
{
  return (
    <div className="HotAccessories">
      <div>
        <img src={ musicCover } alt="music" />
      </div>
      {/* --------------------------------------------2nd Part----------------------------------------- */ }
      <div>
        { music.map( ( item, index ) => (
          <>
            <HotItemCard key={ item.image } name={ item.name } price={ item.price } img={ item.image } index={ index } />
          </>
        ) ) }
      </div>
    </div>
  )
}

export default HotAccessories