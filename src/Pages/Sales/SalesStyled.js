import styled from 'styled-components'


export const Head = styled.div`
width: 100%;
padding-left: 3%;
font-size: 22px;
font-weight: bold;
transform: translateY(-15px);


`

export const Sale = styled.div`
width: 100%;
  height: 100%;

 padding-top: 2rem;
 background-color: #f3f1f1;

@media only screen and (min-width: 900px) and (max-width: 1200px){
      width: calc(100% - 20%);
       
}

`

export const Tables = styled.div`
 width: calc(100% );
 
 background-color: #f3f1f1;
 margin: 0 auto;
 border-radius: 8px;
 display: flex;
 justify-content: space-between;

@media only screen and (max-width: 600px){
display: block;
overflow: auto ;
 margin-bottom: 20px;
}
@media only screen and (min-width: 600px) and (max-width: 900px){
display: block;


}

`

export const Body = styled.div`
 width: calc(100% - 5%);
  height: 100%;
 background-color: #f3f1f1;
 margin: 0 auto;
 border-radius: 8px;
 display: flex;
 justify-content: space-between;
 

@media only screen and (max-width: 600px){
 display: block;
   height: 100%;
   margin-bottom: 100px;
} 
 @media only screen and (min-width: 600px) and (max-width: 900px){
display: block;
  margin-bottom: 100px;
  height: 100%;
}
@media only screen and (min-width: 900px) and (max-width: 1200px){
 
}
`

export const Shop = styled.div`
 width:calc(100% - 3%);
 height: 480px;
 background-color: white;
 border-radius: 8px;
   overflow: auto;
   border-bottom: 8px solid white;
    
    
 &::-webkit-scrollbar{
   width: 4px;
 }
 @media only screen and (max-width: 600px){
  width: 700px;
 }


`

export const THead = styled.thead`
position: sticky;
top: 0;
background-color: white;
display: flex;
padding: 0.8rem;

 


`

export const Th = styled.th`
width: 20%;
font-size: 16px;
font-weight: bold;
padding-left:0.5rem;
 
 
`

export const TBody = styled.div`
 padding: .8rem;
 

`
export const Td = styled.div`
width: 16%;
font-size: 14px;
 font-weight: 600;
 padding-left:.5rem;
 color: #6c6b6b;
 
@media only screen and (min-width: 900px) and (max-width: 1200px){
 font-size: 11px;
 
}
.input{
text-align: center;
border: 1px solid lightgrey;
  width: 60px;
  border-radius: 8px;
  padding: .3rem .2rem .2rem .3rem;
}

 .del{
   width: 45px;
   height: 40px;
   background-color: #ffffff;
   color: #e34a4a;
   padding-top: 4px;
   padding-bottom: 1rem;
   border-radius: 8px;
   margin-left: 40%;
   border: 1px solid #ee7a7a;
   font-size: 18px;
 }
 
 .del:hover{
   background-color: transparent;
    color: #e34a4a;
   transition-duration:.5s;
 }

`



export const Bord = styled.tbody`
border: 1px solid #cecaca;
display: flex;
padding: .6rem;
border-radius: 8px;
align-items: center;
 margin-top: 10px;

  @media only screen and (min-width: 900px) and (max-width: 1200px){
  
  }

`




export const List = styled.td`
height: 480px;
width: calc(100% - 60%);
border-radius: 8px;
background-color: white;


 @media only screen and (max-width: 600px){
  padding: 0;
  display: block;
  width: 100%;
 }
 
@media only screen and (min-width: 600px) and (max-width: 900px){
 display: block;
 margin-top: 20px;
 height: 250px;
  width: 97%;
  text-align: center;
  
}
`

export const Titl = styled.div`
padding:1.5rem;

 @media only screen and (max-width: 600px){
 padding-left: 3rem;
 }
  @media only screen and (min-width: 600px) and (max-width: 900px){
   text-align: center;
   padding: .5rem;
   }
`
export const ListBod = styled.div`
width: 70%;
margin:30px auto;
display: flex;
 @media only screen and (min-width: 600px) and (max-width: 900px){
  width: 80%;
  margin: 0 auto;
} 
@media only screen and (min-width: 900px) and (max-width: 1200px){
width: 95%;
 
 
}
  
 
h5{
 color: #4c4a4a;
 
 span{
 margin-left: 5px;
 color: #3e3c3c;
 }
}
`

export const Buttons = styled.div`
width: 90%;
height: 10%;
margin: 0 auto;
 display: flex;
text-align: center;
padding-top: 10%;
 

.butdiv{
   width: 220px;
   display:flex;
   margin: 0 auto 0  40px;
}
 @media only screen and (max-width: 600px) {
  margin-left: 25px;
 }

 @media only screen and (min-width: 600px) and (max-width: 900px){
  height: 100px;
  padding-top: .5rem;
  
 }

@media only screen and (min-width: 900px) and (max-width: 1200px){
 text-align: center;
 display: flex;
 padding-left: 20px;
 
 .all{
  width: 80px;
  height: 30px;
  font-size: 9px;
  padding: .1rem !important;
 }
 .check{
  width: 75px;
  height: 30px;
  font-size: 11px;
  padding: .1rem !important;
 }
}
 

.all{
 border: none;
 padding: 0.4rem 0.9rem;
 margin-right: 15px;
 border-radius: 8px;
 color: white;
 font-size:13px;
  
 background-color: #D7514B;
 &:hover{
   background-color: white;
   color: #D7514B;
     transition-duration: .5s;
     font-weight: 700;
     
      
 }
}

.check{
 border: none;
 padding: 0.4rem 0.9rem;
 margin-right: 10px;
 border-radius: 8px;
 color: white;
 font-size:13px;
 background-color:#EF754B;
 
 &:hover{
  background-color: white;
  color: #EF754B;
  transition-duration: .5s;
   font-weight: 700;
 } 
}
  @media only screen and (min-width: 1200px) and (max-width: 1304px){
   transform: translateY(-30px);
  }
`

export const Num = styled.div`
font-size: 19px;
text-align: right;

span{
 width: 120px;
 text-align: right; 
}

@media only screen and (min-width: 900px) and (max-width: 1200px){
   
 span{
  font-size: 15px;
 
 
 }
}
`
