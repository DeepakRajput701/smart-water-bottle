import React, { useState } from 'react';
import './ProductSellWebsite.css'; 

function ProductSellWebsite() {
  const [product, setProduct] = useState({
    name: 'Thermos mug thermos smart LED 500ml black',
    price: 299,
    description: 'Elegant thermal mug with LED display showing temperature. It has a practical separator separating coffee grounds. It keeps the drink hot for up to several hours. It has a non-removable CRS2032 battery. Capacity: 500ml. Color: Black. Dimensions: 22x6.5cm.',
    image: 'https://images.merstatic.com/imgcache/538x420/images/offer/2024/07/11//Kubek-termiczny-termos-smart-LED-500ml-822462_668fb2070d37f.jpg '
  });

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    setTotalPrice(product.price * newQuantity);
  };

  const handleBuyNow = () => {
    alert(`Thank you for buying ${quantity} x ${product.name}!`);
  };

  return (
    <div className="product-sell-website">
      <h1>{product.name}</h1>
     
     <div className="product-content">
      <img src={product.image}  alt={product.name} />
      <div className="product-info">
        <p className='price'>Price: {product.price}</p>
        <p>Quantity: <input type="number" value={quantity} onChange={handleQuantityChange} /></p>
        <p>Total Price: INR <span className='blue'>{totalPrice.toFixed(2)}</span></p>
        <div className='list'>
        <ul >
          <li>Model : Smart LED Touch Temperature Water Bottle, ( Multicolor ) 1Pc</li>
          <li>7 days return policy</li>
          <li> <span className='blue'>₹</span> Cash on delivery available</li>
          <li> Leak Proof </li>
        </ul>
        </div>
      </div>
    </div>
      <p>{product.description}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default ProductSellWebsite;