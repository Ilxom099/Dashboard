import styled from "styled-components";

export const Order = styled.div`

width: 100%;
 margin-bottom: 50px;
background-color:#f5f5f5;

@media only screen and (min-width: 900px) and (max-width: 1200px){
  width: calc(100% - 20%);
      
`
export const OrderHead = styled.div`
 width: calc(100% - 10%);
 margin: 30px auto;
 font-size: 22px;
 font-weight: bold;
 display: flex;
 justify-content: space-between;
   @media only screen and (max-width:600px) {
    
  }
 

 
.Title{
 width: calc(100% - 10%);
 margin: 0 auto;
 
 
  @media only screen and (max-width:600px) {
    font-size: 17px;
    margin-top: 10px;
  }
 
}
 

span{
 font-size: 16px;
 color: grey;
 @media only screen and (max-width:600px) {
    font-size: 14px;
  }
}
 
`

export const Tables = styled.div`
width: 90%;
margin: 20px auto;
`

export const Categ = styled.div`
 display: flex; 
  width: 100%;
   margin-bottom: 20px;
 justify-content: space-between;
 
  @media only screen and (max-width: 600px) {
     display: block;
     width: 80%;
     margin: 0 auto;
     text-align: center;
     .cat{
      
      margin: 0 auto !important;
     }
    
  }
   @media only screen and (min-width: 600px) and (max-width: 900px){
     width: 100%;
     
  }
     

 .ant-select-selector{
   
   border-radius: 8px !important;
   background-color: transparent !important;
   
 }
 
 
`


export const Th =styled.th`
padding: 15px;
 
border-bottom: 1px solid #d0cece;
@media only screen and (max-width:600px){
  font-size: 12px!important;
   
}
`

export const Td = styled.td`
padding:15px;
 border-bottom: 1px solid #e5e4e4;

button{
    width:30px;
    height: 25px;
    background-color: white;
    border: none;
   
    color: #c418ad;
    border-radius: 8px;
   }
`

export const AddProduct = styled.div`
 button{
  width: 150px;
  border: 1px solid  #d5d9d7;
  padding: 4px 1.2rem;
  border-radius: 8px;
  background-color:transparent;
  color: #24d798;
  font-weight: 600;
 }
 button:hover{
  background-color: #24d798;
  color: white;
  border: 1px solid  #24d798;
  transition:all 0.5s;
 }
 
  @media only screen and (max-width:600px){
  
   margin: 10px auto;
  }
  @media only screen and (min-width: 600px) and (max-width: 900px){
   
  }
  
`

export const But = styled.div`
 display: flex;
 
 .ordEdit{
  width: 35px;
  height: 30px;
  background-color: #dfefdd;
  color:#00cb6c;
  font-size:17px;
  padding-bottom:2rem;  
  margin-right: 10px;
  border-radius: 5px;
 }
 
 .ordEdit:hover{
    background: transparent;
   color:#00cb6c;
   transition-duration: .5s;
 }
 
 .ordDel{
  width: 35px;
  height: 30px;
  font-size:19px;
  background-color: #f6e7e7;
  color: #f16469;
  border-radius: 5px;
  padding-bottom: 2rem;
  }
  
  .ordDel:hover{
  background-color: transparent;
  color: #f16469;
    transition-duration: .5s;
  }

`