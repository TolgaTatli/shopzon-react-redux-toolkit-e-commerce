import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[400px] p-5 m-2 border rounded-[8%] relative'>
      <div className='text-2xl font-bold absolute rounded-full top-2 right-1.5 bg-black text-white'> {product?.price} <span className='text-sm'>TL</span> </div>
      <img className='w-[200px] h-[250px] object-contain m-auto' src={product?.image} alt="" />
      <div className='text-center px-3 m-3 font-bold text-xl cursor-pointer'>{product?.title}</div>
    </div>
  )
}

export default Product