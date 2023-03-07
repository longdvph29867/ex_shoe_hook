import React, {useState} from 'react'
import Cart_list from './Cart_list'
import { data_shoe } from './data_shoe'
import Detail_Shoe from './Detail_Shoe'
import Shoe_list from './Shoe_list'

export default function Ex_shoe_shop_Hook() {
    const [listShoe, setlistShoe] = useState(data_shoe);
    const [Cart, setCart] = useState([]);
    const [Detail, setDetail] = useState(data_shoe[0]);

    let handleAddToCart = (shoe) => {
        let cloneCart = [...Cart];
        let index = cloneCart.findIndex((item) => item.id == shoe.id);
        if(index == -1) {
          let newShoe = {...shoe, soLuong: 1};
          cloneCart.push(newShoe);
        }
        else {
          cloneCart[index].soLuong++;
        }
        setCart(cloneCart);
      }
    
    let handDelete = (id) => {
        let newCart = Cart.filter((item) => item.id != id) 
        setCart(newCart)
      }
    
    let handleChangeQuantity = (id, select) => {
        let cloneCart = [...Cart];
        let index = cloneCart.findIndex((item) => item.id == id)
        cloneCart[index].soLuong += select;
        if(cloneCart[index].soLuong == 0) {
          cloneCart.splice(index, 1)
        }
        setCart(cloneCart)
      }  

    let detailItemShoe = (id) => {
        let index = listShoe.findIndex((item) => item.id == id)
        setDetail(data_shoe[index])
        
      }
    return (
    <div>
        <h2>Ex_shoe_shop_Hook</h2>
        <div className="row ml-3 mr-3">
          <div className="col-5">
            <Shoe_list 
            listShoe = {listShoe} 
            handleAddToCart = {handleAddToCart} 
            detailItemShoe = {detailItemShoe}
            />
          </div>
          <div className="col-7">
            <Detail_Shoe 
            shoe = {Detail} 
            handleAddToCart = {handleAddToCart} 
            />

            <Cart_list 
            cartList = {Cart} 
            handDelete = {handDelete} 
            handleChangeQuantity = {handleChangeQuantity}/>
          </div>
        </div>
    </div>
  )
}
