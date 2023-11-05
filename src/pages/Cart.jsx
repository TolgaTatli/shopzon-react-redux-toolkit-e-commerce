import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return <div>Cart</div>;
};

export default Cart;
