import React, {useState} from 'react'
import { DashHead, DivSearch, Headers, Search} from "../../Content/ContentStyled";
import {Order,Tables,OrderHead,Categ,AddProduct} from '../Orders/OrdersStyled'
import StickyHeadTable from './ProTables'
import Category from '../Orders/Category/Category'
import {Link } from 'react-router-dom'



import {useSelector} from "react-redux";




function Products() {


    const [date,setDate] = useState('')
    const [categ,setCateg] = useState('')
    const [search1,setSearch] = useState('')
    const product = useSelector(state => state.Reducer.Product)
    const Card = useSelector(state => state.shop.ShopCard)

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
                    <Search type="text"   placeholder={'Search Product'}
                            onKeyUp={(e)=>onKey(e)}
                           />
                    <i className="bi bi-search"> </i>
                </DivSearch>
            </Headers>
            <OrderHead>
                <div className={'Title'}>Product  <span> {product.length} Order found</span></div>
                <div className={'ant'}>
                    <input type="date"   className={'Date'} onChange={(e)=>dataFunc(e)}/>
                </div>
            </OrderHead>
            <Tables>
                <div>
                    <Categ>
                        <Category setCateg={setCateg} setSearch={setSearch}/>
                        <AddProduct>
                            <Link  to={'/sales'}>
                                <button>Sales {Card.length}</button>
                            </Link>
                        </AddProduct>
                    </Categ>

                </div>

                <StickyHeadTable categ={categ} search1={search1} date={date}/>
            </Tables>

        </Order>


    )

}
export default Products