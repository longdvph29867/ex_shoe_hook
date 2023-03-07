import React from 'react'

export default function Cart_list({cartList, handDelete, handleChangeQuantity}) {
    let renderTbody = () => {
        return cartList.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img style={{width: 80}} src={item.image} alt="" /></td>
              <td>
                <button onClick={() => {handleChangeQuantity(item.id, -1)}} className='btn btn-dark'>-</button>
                <strong className='px-2'>{item.soLuong}</strong>
                <button onClick={() => {handleChangeQuantity(item.id, 1)}} className='btn btn-warning'>+</button>
              </td>
              <td><strong>{item.price * item.soLuong}</strong></td>
              <td>
                <button onClick={() => {handDelete(item.id)}} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          )
        })
      }
  return (
    <div>
        <h4>Giỏ hàng</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {renderTbody()}
          </tbody>
        </table>
    </div>
  )
}
