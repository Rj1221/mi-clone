import React from 'react';
import "../styles/ProductReviews.css";
import ProductReviewCard from './ProductReviewCard';
function ProductReview ( { productReviews } ) 
{
  return (
    <>
      <div className="ProductReviews">
        { productReviews.map( ( item, index ) => (
          <ProductReviewCard price={ item.price } name={ item.name } image={ item.image } index={ item.image } key={ index } review={ item.review } />
        ) ) }
      </div>
    </>
  )
}

export default ProductReview