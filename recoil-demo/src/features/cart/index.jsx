import React from "react";
import CartInfo from "./components/CartInfo";
import ProductList from "./components/ProductList";
// import PropTypes from 'prop-types';

const Cart = (props) => {
  return (
    <div>
      <ProductList />
      <CartInfo />
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
