import React,{useState,useEffect} from 'react'
import '../styles/NavOptios.css'
import NavCard from './NavCard'
function NavOptions ( { miPhones, redmiPhones, tv, laptop, fitness, home, radio, accessories } )
{
  const [ miPhone, setmiPhone ] = useState( false );
  const [ redmiPhone, setredmiPhone ] = useState( false );
  const [ tvs, settvs ] = useState( false );
  const [ laptops, setlaptops ] = useState( false );
  const [ fitnesses, setfitnesses ] = useState( false );
  const [ homes, sethomes ] = useState( false );
  const [ radios, setradios ] = useState( false );
  const [ accessoriesses, setaccessoriesses ] = useState( false );

  useEffect( () =>
  {
    if ( window.location.pathname === '/miphones' )
    {
      return setmiPhone( true );
    }
    if ( window.location.pathname === '/redmiphones' )
    {
      return setredmiPhone( true );
    }
    if ( window.location.pathname === '/tv' )
    {
      return settvs( true );
    }
    if ( window.location.pathname === '/laptops' )
    {
      return setlaptops( true );
    }
    if ( window.location.pathname === '/lifestyle' )
    {
      return setfitnesses( true );
    }
    if ( window.location.pathname === '/home' )
    {
      return sethomes( true );
    }
    if ( window.location.pathname === '/audio' )
    {
      return setradios( true );
    }
    if ( window.location.pathname === '/accessories' )
    {
      return setaccessoriesses( true );
    }
  
  }, [ miPhones, redmiPhones, tv, laptop, fitness, home, radio, accessories ] );
  return (
    <>
      <div className="navOptions">
        { miPhone? miPhones.map( (item,index) => (
         <NavCard name={item.name} image={item.image} price={item.price} index={index}/>
        ) ) : null }
        { redmiPhone? redmiPhones.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
        { tvs? tv.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
        { laptops ? laptop.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
        {fitnesses ?fitness.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
        { homes ? home.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
        { radios ? radio.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
        {accessoriesses ?accessories.map( ( item, index ) => (
          <NavCard name={ item.name } image={ item.image } price={ item.price } index={ index } />
        ) ) : null }
      </div>
    </>
  )
}

export default NavOptions