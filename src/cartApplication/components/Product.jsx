import { useState } from "react";
export default function Product({
  
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
  cardQuantity,
})
 {
  const[showStatus, setShowStatus] = useState(false);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => onAddToCart(id) | setShowStatus(!showStatus)}>Add to Cart</button>
          
          {showStatus?<p>Added</p> : <p></p>}
        </p>
      </div>
    </article>
  );
}
