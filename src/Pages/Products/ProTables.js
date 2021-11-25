import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';

import { Td,Th } from '../Orders/OrdersStyled'
import {But} from './ProductStyled'
import {MdDelete, MdEdit} from "react-icons/md";
import {BsFillCartPlusFill,BsCartCheckFill } from "react-icons/bs";
import watch from '../../Content/1464.jpg'
import {useDispatch, useSelector} from "react-redux";



import {DeleteToShop, ToShop} from "../../Store/Redux/ShopReducer";
import {useState} from "react";

export default function StickyHeadTable({categ,searchDate,search1,date}) {




    const product = useSelector(state => state.Reducer.Product)
    // const car = useSelector(state => state.ReducerCartShop.cart)
    const Card = useSelector(state => state.shop.ShopCard)
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    function ToCard(item) {
        dispatch(ToShop(item))
    }
    function DelCard(item) {
        dispatch(DeleteToShop(item))
    }

    return (
        <Paper className={'MuiTable tebl'} sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer  sx={{ maxHeight: 440 }}>

                <Table stickyHeader aria-label="sticky table">
                    <TableHead className={'thead'}>
                        <tr >
                            <Th className={'th'}> Id </Th>
                            <Th className={'th'}> Product Name</Th>
                            <Th className={'th'}> Description</Th>
                            <Th className={'th'}> Amount</Th>
                            <Th className={'th'}> Price</Th>
                            <Th className={'th'}> Date</Th>
                            <Th className={'th'}> Status </Th>
                        </tr>
                    </TableHead>
                    <TableBody>




                        { product.filter((item)=>{

                            if(categ){
                                return(item.category === categ)
                            }

                            if(date){
                                return(item.amount === date)
                            }

                            if(item.productName){
                                return item.productName.toLowerCase().indexOf(search1.toLowerCase()) > -1;
                            }
                            else {
                                return item
                            }


                        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item,index) => <tr key={index}>
                                    <Td> {index +1} </Td>
                                    <Td><img src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`} width={40} height={40} alt=""/> { item.productName } </Td>
                                    <Td> {item.description } </Td>
                                    <Td>{item.amount}</Td>
                                    <Td>{item.price}</Td>
                                    <Td>20/03/2021</Td>
                                    <Td>
                                        <But>
                                            {
                                                Card.some((i)=>i.id===item.id) ?(
                                                <div><button onClick={()=>DelCard(item.id)} className={'delete '}> <BsCartCheckFill/> </button></div>
                                            )
                                            :
                                                <div><button onClick={()=>ToCard(item)}  className={'edit '}> <BsFillCartPlusFill/> </button></div>
                                            }
                                        </But>

                                    </Td>

                                </tr>

                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination

                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={product.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

