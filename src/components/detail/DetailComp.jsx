import React from "react";

const DetailComp = ({ productDetail }) => {
  return (
    <div>
      <img
        className="w-[700px] h-[700px] object-cover"
        src={productDetail?.image}
      />
      <div className="">
        <div>{productDetail?.title}</div>
      </div>
    </div>
  );
};

export default DetailComp;
