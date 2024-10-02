import React from 'react';
import chelsea from "../../assets/Images/Shopping/1.png";
import united from "../../assets/Images/Shopping/2.png";
import mancity from "../../assets/Images/Shopping/3.png";
import aresenal from "../../assets/Images/Shopping/4.png";
import liverpool from "../../assets/Images/Shopping/5.png";
import '../../styles/Shopping.scss'; // Ensure to import your SCSS file

const products = [
  {
    name: "Chelsea Home Kit 22/23",
    price: "$99.00",
    image: chelsea,
  },
  {
    name: "West Ham United Kit",
    price: "$89.00",
    image: united
  },
  {
    name: "Man City Away Kit",
    price: "$120.00",
    image: mancity
  },
  {
    name: "Arsenal Away Kit",
    price: "$105.00",
    image: aresenal
  },
  {
    name: "Liverpool Home Kit",
    price: "$115.00",
    image: liverpool
  },
];

const ShoppingComponent = () => {
  return (
    <div className="shopping-component">
      <h2 className="shopping-title">
        <span role="img" aria-label="flag">👕 </span> Shopping
      </h2>
      
      {/* Products */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingComponent;
