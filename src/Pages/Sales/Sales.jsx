import React, {useEffect, useState} from 'react';
import {Sale,
    Head, Body, Shop, List, THead, Th, TBody,
    Td, Bord, Titl, ListBod, Buttons, Tables, Num
} from './SalesStyled'


import {RiDeleteBin6Line} from 'react-icons/ri'
import SaleModal from "./Popap/SalePopap";
import {useSelector,useDispatch} from "react-redux";
import {DeleteToShop, GetValue,ClearShop} from "../../Store/Redux/ShopReducer";
import Empty from './pngaaa.com-293115.png'


function Sales() {

    const dispatch = useDispatch()

    const Card = useSelector(state => state.shop.ShopCard)

    const Price = Card.reduce((total,item)=>{
        total  += item.price * item.amount;
        return total;
    },0)

    function ToggleValue(e,item) {
        const val = e.target.value
        dispatch(
            GetValue({...item,count:val})
        )
    }


    function Delitem(id) {
       dispatch(
           DeleteToShop(id)
       )
    }



    function calculate(persent,num) {
            return(persent / 100) * num;
    }




    return(
        <Sale>

            <Head>
                Sales
            </Head>
           <Body>
               <Tables>


               <Shop>
                   <THead>
                     <Th>Photo</Th>
                     <Th>Name</Th>
                     <Th>Quantity</Th>
                     <Th>Price</Th>
                     <Th>Total</Th>
                     <Th> </Th>
                   </THead>
                   <TBody>


                       {
                          Card.length === 0 ? <img src={Empty} className={'empty'} alt=""/> :
                              Card.map((item,index) =>
                                  <Bord key={index}>
                                      <Td ><img   src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`} width={50} height={50} alt=""/></Td>
                                      <Td>{item.productName}</Td>
                                      <Td> <input type="number"  className={'input'} value={item.amount} onChange={(e)=>ToggleValue(e,item)} min={0}  /> </Td>
                                      <Td>{item.price}</Td>
                                      <Td> </Td>
                                      <Td>
                                          <button onClick={()=>Delitem(item.id)} className={'del'} ><RiDeleteBin6Line/></button></Td>
                                  </Bord>

                              )
                       }
                   </TBody>
               </Shop>
               </Tables>

               <List>
                    <Titl><h3>Price</h3></Titl>
                   <ListBod>
                       <Num>Sub Total: <span>$ {Price}</span> </Num>
                   </ListBod>
                   <ListBod>
                        <h5>Shopping: <span>Free</span> </h5>
                   </ListBod>
                   <ListBod>
                        <h5> Tax(18%): <span>$ {calculate(18,Price)}</span> </h5>
                   </ListBod>
                   <ListBod>
                        <h4>Total: <span> $ {Price + calculate(18,Price)} </span> </h4>
                   </ListBod>
                   <Buttons>

                         <div className={'butdiv'}>
                             <div> <button className={'all'}  onClick={()=>dispatch(ClearShop())} >All Clear</button></div>
                             <div> <SaleModal  Card={Card}/> </div>
                         </div>

                   </Buttons>
               </List>
           </Body>


        </Sale>
    )

}
export default Sales
