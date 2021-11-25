import React, {useEffect} from 'react'
import {Contents,
    Headers,Search, DivSearch, DashHead, Cards, Card, CardIcon, ChartDiv,
    Charts, AnaliticStyle, Tables, ChartsContent, Tabs, Table, Tr, Th, Td,
    But, Thead, Tbody, Cust,
} from './ContentStyled'
import { FaHandHoldingUsd ,FaShoppingCart} from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdEdit,MdDelete} from "react-icons/md";
import Chart from './Charts/Charts'
import Analitic from './AnakiticChart/Analitic'
import Customers from "./Customer/Customer";
import {GetProducts,GetYesterday,GetWeekProduct,GetWeeks} from '../Store/Redux/GetCards'
import {useDispatch, useSelector} from "react-redux";
import watch from './1464.jpg'

 function Content() {
     const dashboard = useSelector(state => state.DashboardReducer.dashboard)
     const yesterday = useSelector(state => state.DashboardReducer.sat)


     const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetProducts())
        dispatch(GetYesterday())
        dispatch(GetWeekProduct())
        dispatch(GetWeeks())
    },[])





     let w  = 0
     let s = 0
     dashboard.map((item)=>{

         item.productList.forEach(it =>{
             w += parseInt(it.product.price)
         })

         item.productList.forEach(it =>{
             s += parseInt(it.amount)
         })

     })

     let y = 0
     let x = 0

     yesterday.map((item)=>{

         item.productList.forEach(it =>{
             y += parseInt(it.product.price)
         })

         item.productList.forEach(it =>{
             x += parseInt(it.amount)
         })

     })

     let xx = 0
     function Hisob(o,y) {
         return(y % 100  ) + o

     }
     function Foiz(o,y,d) {

         if(y < d){

             return d - y + o
         }
         else{
             return y - d - o
         }


     }



    return(

            <Contents>
                <Headers>
                    <DivSearch>
                        <Search type="text"   placeholder={'Search Product'} />
                        <i className="bi bi-search"> </i>
                    </DivSearch>
                </Headers>
                <DashHead>
                     <div className={'Title'}>Dashboard</div>
                </DashHead>

                <Cards>
                   <Card>
                    <CardIcon className={'CardIcon hover'}>  <AiFillDollarCircle className={'Dolor Icon'}/> </CardIcon>
                       <div className={'num'}>${new Intl.NumberFormat().format(w)}</div>
                       <div className={'titles'}>
                           <div className={'today'}>
                               Today Sales
                           </div>
                               {Hisob(0,w)  <  Hisob(0,y) ?


                                   <div className={'protsent'}>
                                       <div >
                                           <i className="bi bi-arrow-down-right mx-1"> </i>
                                       </div>
                                       <div className={'box2'}>
                                           -{Foiz(0,Hisob(0,y),Hisob(0,w))}%
                                       </div>
                                   </div>


                                   :

                                   <div  className={'protsent'}>
                                       <div>
                                           <i className="bi bi-arrow-up-right mx-2"> </i>
                                       </div>
                                       <div className={'box1'}>

                                           +{Foiz(0,Hisob(0,y),Hisob(0,w))}%

                                       </div>

                                   </div>



                               }


                       </div>
                   </Card>




                    <Card>
                     <CardIcon className={'CardTwo hover'}>   <FaHandHoldingUsd className={'HandDolor Icon'}/>   </CardIcon>
                        <div className={'num'}>$1255.00</div>
                        <div className={'titles'}>
                            <div className={'today'}>
                                Today Sales
                            </div>
                            <div className={'protsent'}>
                                <i className="bi bi-arrow-up-right-circle"> </i> +35%
                            </div>
                        </div>
                   </Card>


                    <Card>
                       <CardIcon  className={'CardThree hover'}> <IoIosPeople className={'Peoples Icon'}/>  </CardIcon>
                        <div className={'num'}>{dashboard.length}</div>
                        <div className={'titles'}>
                            <div className={'today'}>
                                Today Sales
                            </div>
                            <div >
                                {Hisob(0,dashboard.length)  <  Hisob(0,yesterday.length) ?


                                    <div className={'protsent'}>
                                        <div className={'boxChild2'}>
                                            <i className="bi bi-arrow-down-right color-dark mx-2"> </i>
                                        </div>
                                        <div className={'box2'}>
                                            -{Foiz(0,Hisob(0,yesterday.length),Hisob(0,dashboard.length))}%
                                        </div>
                                    </div>


                                    :

                                    <div className={'protsent'}>
                                        <div className={'boxChild1'}>
                                            <i className="bi bi-arrow-up-right mx-2"> </i>
                                        </div>
                                        <div className={'box1'}>
                                            +{Foiz(0,Hisob(0,yesterday.length),Hisob(0,dashboard.length))}%

                                        </div>

                                    </div>
                                }

                            </div>
                        </div>
                   </Card>



                    <Card>
                    <CardIcon  className={'CardFour hover'}>  <FaShoppingCart className={'Cart Icon'}/> </CardIcon>
                        <div className={'num'}>{s}</div>
                        <div className={'titles'}>
                            <div className={'today'}>
                                Today Sales
                            </div>
                            {Hisob(0,s)  <  Hisob(0,x ) ?


                                <div className={'protsent'}>
                                    <div className={'boxChild2'}>
                                        <i className="bi bi-arrow-down-right mx-2"> </i>
                                    </div>
                                    <div className={'box2'}>
                                        -{Foiz(0,Hisob(0,x),Hisob(0,s))}%
                                    </div>
                                </div>


                                :

                                <div className={'protsent'}>
                                    <div >
                                        <i className="bi bi-arrow-up-right mx-2"> </i>
                                    </div>
                                    <div className={'box1'}>

                                        + {Foiz(0,Hisob(0,x),Hisob(0,s))} %

                                    </div>

                                </div>
                            }

                        </div>
                   </Card>
                </Cards>

                <ChartDiv>
                    <ChartsContent>
                        <Charts>
                            <h4>Sales Overview</h4>
                            <Chart  />
                        </Charts>
                        <AnaliticStyle>
                            <Analitic/>
                        </AnaliticStyle>
                    </ChartsContent>

                   <Tabs>
                       <Tables>
                           <h4 className={'h5'}>Recent Orders</h4>
                          <Table>
                              <Thead>
                                  <Tr  className={'th'}>
                                      <Th>Order Id</Th>
                                      <Th>Product Name</Th>
                                      <Th>Date</Th>
                                      <Th>Price</Th>

                                  </Tr>
                              </Thead>
                              <Tbody>
                                  <Tr>
                                      <Td> #22323232 </Td>
                                      <Td><img src={watch} width={40} height={40} alt=""/>  Note 9 pro </Td>
                                      <Td> 31/12/2021 </Td>
                                      <Td> $ 25000 </Td>

                                  </Tr><Tr>
                                  <Td> #22323232 </Td>
                                  <Td><img src={watch} width={40} height={40} alt=""/>  Note 9 pro </Td>
                                  <Td> 31/12/2021 </Td>
                                  <Td> $ 25000 </Td>

                              </Tr><Tr>
                                  <Td> #22323232 </Td>
                                  <Td><img src={watch} width={40} height={40} alt=""/>  Note 9 pro </Td>
                                  <Td> 31/12/2021 </Td>
                                  <Td> $ 25000 </Td>

                              </Tr><Tr>
                                  <Td> #22323232 </Td>
                                  <Td><img src={watch} width={40} height={40} alt=""/>  Note 9 pro </Td>
                                  <Td> 31/12/2021 </Td>
                                  <Td> $ 25000 </Td>

                              </Tr><Tr>
                                  <Td> #22323232 </Td>
                                  <Td><img src={watch} width={40} height={40} alt=""/>  Note 9 pro </Td>
                                  <Td> 31/12/2021 </Td>
                                  <Td> $ 25000 </Td>

                              </Tr><Tr>
                                  <Td> #22323232 </Td>
                                  <Td><img src={watch} width={40} height={40} alt=""/>  Note 9 pro </Td>
                                  <Td> 31/12/2021 </Td>
                                  <Td> $ 25000 </Td>
                                  {/*<Td>*/}
                                  {/*    <But>*/}
                                  {/*        <div><button className={'edit'}> <MdEdit/> </button></div>*/}
                                  {/*        <div><button className={'delete'}> <MdDelete/> </button></div>*/}
                                  {/*    </But>*/}
                                  {/*</Td>*/}
                              </Tr>
                              </Tbody>

                          </Table>
                       </Tables>
                          <Cust>
                              <h4 >Visit Customers</h4>
                              <Customers className={'customs'} />
                          </Cust>
                   </Tabs>
                </ChartDiv>


            </Contents>

    )


 }
 export default Content
