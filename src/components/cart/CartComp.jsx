import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="flex items-center justify-between">
      <img
        className="w-[120px] h-[120px] object-contain my-5"
        src={cart?.image}
      />
      <div className="w-[476px] ">
        <div className="text-xl font-bold"> {cart?.title} </div>
      </div>
      <div className="font-bold text-2xl"> {cart?.price} TL </div>
      <div className="font-bold text-xl"> {cart?.quantity} </div>
      <div className="cursor-pointer bg-red-500 rounded-xl text-white w-[100px] h-[16] flex items-center justify-center ">
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
