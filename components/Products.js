import React from 'react';

function Products({image,title,price}) {
  return (
    <div className="bg-white w-48 h-56 justify-center items-center p-2 rounded-sm">
        <div className="w-40 h-40">
        <img src={image} style={{width:'100%', height:'100%'}} />
        </div>
        <div className="line-clamp-1 font-bold">{title}</div>
        <div className="line-clamp-1 text-gray-700 font-semibold">$ {price}</div>
    </div>
  );
}

export default Products;
