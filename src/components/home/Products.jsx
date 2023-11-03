import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import Loading from "../Loading";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector(
    (state) => state.products
  ); /* state.products olma sebebi storeda products olarak tanımlamamız ve
  productSlice içindeki products ve productStatus ile aynı ismi vererek destruct etmiş oluruz. */

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {productStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-center items-center">
          {products?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
