import React, {useEffect, useRef, useState} from 'react';
import {CreatPage,
    CreatTitle,
    Header,
    Titles,
    Body,
    EditOne,
    EditTwo,
    Name,
    Textarea,
    Image,
    ImgLabel,
    Price,
    Label,
    Buts,
    Right,
    Img,


} from './CreatStyled'
import { AvForm, AvField} from 'availity-reactstrap-validation';
import imag from './imag.png'
import Categor from './Categor'
import { Input } from 'antd';
import axios from "axios";

import {useDispatch} from "react-redux";
import {AddProduct} from "../../Store/Redux/redux";
import {Head} from "../Sales/SalesStyled";
import {useHistory} from 'react-router-dom'


const { TextArea } = Input;

 function Creat(){


     const [img,setImg] = useState(null)
     const [load,setLoad] = useState(false);
     const [categ,setCateg] = useState("")
     const dispatch = useDispatch()
     const toggle = useRef(null);

     const Histor = useHistory()

     function AvformSubmit(event,values){
         // const value = {
         //  porductName:values.porductName,
         //  price:values.price,
         //  amount:values.amount,
         //  description:values.description,
         //  imageId:img,
         //  category:categ,
         // }
         let a = {
             ...values,
             imageId:img
         }

         dispatch(AddProduct(a))
         Histor.push('/orders')
     }

     function handleImg(e) {
         setLoad(true)
         const onload = e.target.files[0];
         const formData = new FormData();
         formData.append("image", onload)
         axios({
             url: "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
             method: "POST",
             data: formData,
         }).then((res) => {
             setImg(res.data);
             setLoad(false)
         })
     }




     return(
         <CreatPage>




             <CreatTitle>
                 <Header> Creat a now product </Header>
                 <AvForm onValidSubmit={AvformSubmit}>
                 <Body>



                    <EditOne >
                       <Name>

                               <AvField name="productName"  placeholder={'Product Name'}  className={'avform'} required />

                            <Textarea>
                                <div className={'des'}> Description </div>
                                <TextArea rows={3} className={'textArea'}/>
                            </Textarea>
                       </Name>
                        <Price className={'ImageNone'}>
                            <Label>Price</Label>

                                <AvField name="price"  placeholder={'Price'}  className={'avform'} required />

                            <Label>Amount</Label>

                                <AvField name="amount"    placeholder={'Amount'}  className={'avform'} required />

                            <Label>Category</Label>
                            <Categor use={setCateg}/>


                        </Price>
                        <Image >
                            <Textarea>

                                <div className={'des'}> Add Image </div>

                                {
                                    img ?  <i className="bi bi-x-lg float-end"  onClick={()=>setImg(null)}> </i> : ''
                                }

                                  <ImgLabel htmlFor={"imgDown"}>


                                      {
                                          img ? <Img   src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`} />  :
                                              <div>
                                                  {
                                                      load ?   <div className="lds-ripple">
                                                          <div> </div>
                                                          <div> </div>
                                                      </div> :    <div> <img src={imag} alt="no foto" className={'imag'}/>
                                                          <span>Drop or Select file</span>
                                                      </div>
                                                  }
                                              </div>
                                      }

                                  </ImgLabel>

                            </Textarea>
                            <input type="file"  ref={toggle} className={'file d-none'} id={"imgDown"} onChange={handleImg}/>
                         </Image>

                    </EditOne>
                     <Right>
                         <EditTwo>
                             <Price className={'MobNone'}>
                                 <Label>Price</Label>

                                     <AvField name="price"  placeholder={'Price'}  className={'avform'} required />

                                 <Label>Amount</Label>

                                     <AvField name="amount"  placeholder={'Amount'}  className={'avform'} required />

                                 <Label>Category</Label>
                                 <Categor use={setCateg}/>


                             </Price>

                         </EditTwo>
                          <Buts>
                               Create Product
                          </Buts>

                     </Right>

                 </Body>
                 </AvForm>
             </CreatTitle>

         </CreatPage>
     )


 }
 export default Creat
