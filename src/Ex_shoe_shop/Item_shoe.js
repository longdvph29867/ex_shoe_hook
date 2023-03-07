import React from 'react'

export default function Item_shoe({item, handleAddToCart, detailItemShoe}) {
    let {id ,name, price, image} = item;
  return (
    <div className='col-4 mb-5'>
          <div className="card border-primary h-100">
          <img className="card-img-top" src={image} alt='' />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            <button onClick={() => {handleAddToCart(item)}} className='btn btn-success'>Add to Cart</button>
            <button onClick={() => {detailItemShoe(id)}} className='btn btn-info mt-2'>View detail</button>
          </div>
        </div>
      </div>
  )
}
