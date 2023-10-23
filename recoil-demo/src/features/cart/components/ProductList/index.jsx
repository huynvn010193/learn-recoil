import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { addToCart, cartState } from "../../cartState";
import { productListState } from "../../productState";
// import PropTypes from "prop-types";

const ProductList = (props) => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  }

  return (
    <div>
      <h2>ProductList</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button
              style={{ margin: '1rem'}}
              onClick={() => handleAddToCart(product)}
            >Add to card</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {};

export default ProductList;
