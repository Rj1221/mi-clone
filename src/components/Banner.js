import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Banner ( { banner } )
{
  return (
    <Carousel fade>
      { banner.map( ( item, index ) => (
        <Carousel.Item key={ item.image } id='banner' interval={ 1000 } >
          <img className='d-block w-100' src={ item.image } alt={ `${ index } banner` } id="bannerImage" />
          <Carousel.Caption>
            <h3>{ item.name }</h3>
            <h3>{ item.description }</h3>
            <h3>{ item.source }</h3>
            <u>Read more</u>
          </Carousel.Caption>
        </Carousel.Item>
      ) ) }

    </Carousel>
  )
}

export default Banner