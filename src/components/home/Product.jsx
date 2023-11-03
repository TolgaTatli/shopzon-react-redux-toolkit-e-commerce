import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[457px] p-5 m-2 border rounded-[8%] relative h-[380px]'>
      <div className='text-2xl font-bold absolute rounded-full top-2 right-1.5 bg-black text-white'> {product?.price} <span className='text-sm'>TL</span> </div>
      <img className='w-[250px] h-[250px] object-contain m-auto' src={product?.image} alt="" />
      <div className='text-center px-3 m-3 font-extrabold text-lg cursor-pointer absolute'>{product?.title}</div>
    </div>
  )
} 

export default Product