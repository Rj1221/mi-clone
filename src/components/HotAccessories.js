import React from 'react'
import '../styles/HotAccessories.css'
import HotItemCard from './HotItemCard'
function HotAccessories ( { music, musicCover, smartDevices, smartDevicesCover, mobileAccessories, mobileAccessoriesCover, home, homeCover, lifeStyle, lifeStyleCover } )
{
  return (
    <div className="HotAccessories">
      {/* Biggger Image Part */ }
      <div>
        <img src={ musicCover || smartDevicesCover || mobileAccessoriesCover || homeCover || lifeStyleCover } alt="music" />
      </div>
      <div>
        {/* --------------------------------------------Music side card Part----------------------------------------- */ }
        { music && music.map( ( item, index ) => (
          <>
            <HotItemCard key={ item.image } name={ item.name } price={ item.price } image={ item.image } index={ index } />
          </>
        ) ) }

        {/* ----------------------------------------Smart Devices side card Part----------------------------------- */ }

        { smartDevices && smartDevices.map( ( item, index ) => (
          <>
            <HotItemCard key={ item.image } name={ item.name } price={ item.price } image={ item.image } index={ index } />
          </>
        ) ) }

        {/* -------------------------------------------Mobile Accessories------------------------------------------- */ }

        { mobileAccessories && mobileAccessories.map( ( item, index ) => (
          <>
            <HotItemCard key={ item.image } name={ item.name } price={ item.price } image={ item.image } index={ index } />
          </>
        ) ) }
        {/* -------------------------------------------Life Style------------------------------------------- */ }

        { lifeStyle && lifeStyle.map( ( item, index ) => (
          <>
            <HotItemCard key={ item.image } name={ item.name } price={ item.price } image={ item.image } index={ index } />
          </>
        ) ) }
        {/* -------------------------------------------Home-------------------------------------------------- */ }
        { home && home.map( ( item, index ) => (
          <>
            <HotItemCard key={ item.image } name={ item.name } price={ item.price } image={ item.image } index={ index } />
          </>
        ) ) }

        {/* -----------------------------------Browse More Section---------------------------------------------- */ }
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" name={ undefined } price={ undefined } index={ undefined } />
      </div>
    </div>
  )
}

export default HotAccessories