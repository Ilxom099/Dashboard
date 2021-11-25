import React, {useEffect, useState} from 'react'
import { DashHead, DivSearch, Headers, Search} from "../../Content/ContentStyled";
import {Order,Tables,OrderHead,Categ,AddProduct} from './OrdersStyled'
import StickyHeadTable from './Tables/Tables'
import Category from './Category/Category'
import {Link, NavLink} from 'react-router-dom'


import { useSelector,useDispatch } from "react-redux";






function Orders({}) {
    const product = useSelector(state => state.Reducer.Product)
    const [categ,setCateg] = useState('')
    const [search1,setSearch] = useState('')
    const [date,setDate] = useState('')

    function onKey(e) {
        if (e.keyCode === 13){
            setSearch(e.target.value)
            setCateg('')

        }
    }

    function dataFunc(e) {
        setDate(e.target.value)

    }


        return(
        <Order>
            <Headers>
                <DivSearch>
                    <Search type="text"   placeholder={'Search Product'}  onKeyUp={(e)=>onKey(e)} />
                    <i className="bi bi-search"> </i>
                </DivSearch>
            </Headers>
            <OrderHead>
                <div className={'Title'}>Order  <span>{product.length } Order found</span></div>
               <div className={'ant'}>
                   <input type="date" className={'Date'} onChange={(e)=>dataFunc(e)}/>
               </div>
            </OrderHead>
            <Tables>
                <div>
                    <Categ>
                        <Category setCateg={setCateg} setSearch={setSearch}/>
                        <AddProduct>
                          <Link  to={'/create'}>
                              <button>Add Product</button>
                          </Link>
                        </AddProduct>
                </Categ>

                </div>

                <StickyHeadTable  categ={categ} search1={search1} date={date}/>



            </Tables>

        </Order>


    )

}
export default Orders