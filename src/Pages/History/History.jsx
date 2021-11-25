import React, {useState,useEffect} from 'react'
import {Histor,HisHead,Card,Icon,Date,Title,Box1,Box2,Box3,Box4,Body,Lengths} from './HistoryStyled'
import {Cards, } from "../../Content/ContentStyled";
import { BsCheck2Circle } from "react-icons/bs";
import {historyAxios} from '../../Store/Redux/HistoryReducer'
import {useDispatch, useSelector} from "react-redux";
import TablePagination from "@mui/material/TablePagination";
import Foto from './businessman-holding-pencil-at-big-complete-checklist-with-tick-marks_1150-35019.jpg'

function History( ) {

    const history = useSelector(state => state.History.history)
    console.log(history)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(historyAxios())
    },[])


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const [search1,setSearch] = useState('')
    const [categ,setCateg] = useState('')
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
        <Histor>
            <HisHead>
                <div className={'Title'}>History</div>
                <div className={'ant'}>
                    <input type="date" className={'Date'} onChange={(e)=>dataFunc(e)}/>
                </div>
            </HisHead>

            <Cards >
            {
                history.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item,index) =>
                    <Card key={index}>

                        <Icon>
                            <img src={Foto}  alt=""/>
                        </Icon>
                        <Date>
                            <span>{item.createdAt.substring(0, 10)}</span>
                            <span>{item.createdAt.substring(12, 16)}</span>
                        </Date>
                        <Title>
                            <Box1 className={'title'}>N </Box1>
                            <Box2 className={'title'}>Name </Box2>
                            <Box3 className={'title'}>Amount </Box3>
                            <Box4 className={'title'}>Price </Box4>
                        </Title>

                      <Body>
                          {
                              item.productList.map((item,index) =>
                                  <Title  >
                                      <Box1>{index+1} </Box1>
                                      <Box2>{item.product.productName} </Box2>
                                      <Box3> {item.amount} </Box3>
                                      <Box4> {item.product.price} </Box4>
                                  </Title>
                              )
                          }
                      </Body>

                        <Lengths>
                            <div className={'tength'}> All product {item.productList.length}</div>
                            <div className={'tength'}>$ Price {item.productList.reduce((total,val)=>{
                                 total += val.product.price * val.amount;
                                 return total
                            },0)}</div>

                        </Lengths>

                    </Card>


               )
            }
            </Cards>


            <TablePagination

                rowsPerPageOptions={[9, 25, 100]}
                component="div"
                count={history.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Histor>
    )

}
export default History