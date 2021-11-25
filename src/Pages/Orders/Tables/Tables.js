import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import {Td, Th, But, Tables} from '../OrdersStyled'
import {MdDelete, MdEdit} from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import TransitionsModal from '../Edit/Edit'
import DeleteModal from "../DeleteModal/DeleteModal";
import watch from '../../../Content/1464.jpg'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GetProduct} from "../../../Store/Redux/redux";
import Popup from "reactjs-popup";


export default function StickyHeadTable({categ,searchDate,search1,date}) {


    const product = useSelector(state => state.Reducer.Product)




    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [edit,setEdit] = useState('')

    function editProduct(item) {
         setEdit(item)
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={'MuiTable tebl'} sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer  sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table ">
                    <TableHead className={'thead '}>
                         <tr >
                            <Th className={'th'}> Id </Th>
                            <Th className={'th'}> Product Name</Th>
                            <Th className={'th'}> Description</Th>
                            <Th className={'th'}> Amount</Th>
                            <Th className={'th'}>Price </Th>

                            <Th className={'th'}> Status  </Th>
                         </tr>
                    </TableHead>
                    <TableBody>
                        {product.filter((item)=>{

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
                                <Td> {item.id} </Td>
                                <Td><img  className={'mx-2'} src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`} width={40} height={40} alt=""/>
                                {item.productName} </Td>
                                <Td>

                                            {item.description}



                               </Td>
                                <Td> {item.amount} </Td>
                                <Td> {item.price} </Td>

                                <Td>
                                    <But>
                                        <div onClick={()=>editProduct(item)}><TransitionsModal  editor={item} /></div>
                                        <div> <DeleteModal editor={item} />  </div>
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

