import React from "react";

export const Product = ({ product }) => {
  const { image, brand, size, gender, price } = product;

  return (
    <div className='pd-card-container vertical'>
      <div className='card-img-wrapper vertical-img'>
        <img
          src={image}
          className='pd-img card-img vertical-card-img'
          alt={`${brand} + img`}
        />
      </div>
      <div className='pd-content'>
        <h1 className='pd-heading card-heading'>{brand}</h1>
        <div className='pd-price'>
          <p className='crnt-price'>₹{price}</p>
        </div>
        <div className='pd-gender'>
          <p className='crnt-price'>Gender : {gender}</p>
        </div>
        <div className='pd-gender'>
          <p className='crnt-price'>Size : {size}</p>
        </div>
        <div className='pd-card-action pd-card-btn flex jc-center'>
          <button className='btn flex'>DUMMY</button>
        </div>
      </div>
    </div>
  );
};
