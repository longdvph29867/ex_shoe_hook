import React from 'react'
import Item_shoe from './Item_shoe'

export default function Shoe_list({listShoe, handleAddToCart, detailItemShoe}) {
    let renderShoeList = () => {
        return listShoe.map((item, index) => {
          return (
            <Item_shoe 
            key={index} 
            item = {item} 
            handleAddToCart = {handleAddToCart} 
            detailItemShoe = {detailItemShoe}
            />
          )
        })
      }
  return (
    <div className='row'>
        {renderShoeList()}
    </div>
  )
}
