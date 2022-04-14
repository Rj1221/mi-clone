import React from 'react'
import "../styles/Videos.css"
import VideoCard from './VideoCard'
function Videos ( { videos } )
{
  return (
    <div className="videos">
      { videos.map( ( item, index ) => (
        <VideoCard key={ index } image={ item.image } name={ item.name } />
      ) ) }
    </div>
  )
}

export default Videos