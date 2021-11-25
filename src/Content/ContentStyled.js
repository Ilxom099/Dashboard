import styled from 'styled-components'


export const Contents = styled.div`
width: 100%;
 
background-color:#f5f5f5;

@media only screen and (min-width: 900px) and (max-width: 1200px){
      width: calc(100% - 20%);
      
}
`
export const Headers =styled.div`
width: 100%;
height: 56px;
background-color: #ffffff;
position: sticky;
position: -webkit-sticky;
top:0;
z-index: 1;

@media only screen and (min-width: 900px) and (max-width: 1200px){
 
 
  
}

`
export const DivSearch = styled.div`
  


 i{
  margin-left: -25px;
  font-size: 10px;
  color:  #9CA2A7;
}

 @media only screen and (max-width: 600px){
  text-align: right;
  width: 95%;
  margin-left: -25px;
 }
 @media only screen and (min-width: 600px) and (max-width:900px){
    text-align: right;
     width: 95%;
     margin-left: -5px;
 }

`

export const Search = styled.input`
 width: 300px;
 margin-left: 50px;
 margin-top: 12px;
 padding: 0.4rem 1.5rem;
 border-radius: 8px;
 outline: none;
 border: none;
 background-color: #fafafa;
 &::placeholder{
  font-size: 12px;
  color:  #afb4b8;
  font-weight: bold;
 }
 &:hover{
  box-shadow: 0 0 3px #6e7ef1;
  transition-duration: 0.5s;
 }
 &:focus{
  
  box-shadow: 0 0 3px #5555ef;
 }
 
 @media only screen and (max-width: 600px){
  width: 60%;
 }
 @media only screen and (min-width: 900px) and (max-width: 1200px){
   width: 250px;
   margin-left: 20px;
}
     @media only screen and (min-width: 1200px) and (max-width: 1350px){
      margin-left: 20px;
     }
`

export const DashHead = styled.div`
width: calc(100% - 50%);
margin: 30px 0;
font-size: 22px;
font-weight: bold;
   display: flex;
   justify-content: space-between;

@media only screen and (max-width: 600px){
  margin: 15px 20px;
}
@media only screen and (min-width: 600px) and (max-width:900px){
  
   width: 100%;
}

.Title{
 width: calc(100% - 10%);
 margin: 0 auto;
}
 

span{
 font-size: 16px;
}
 

`

export const Cards = styled.div`
width: calc(100% - 5%);
margin: 15px auto;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
  @media only screen and (max-width: 600px){
   display:block;
  }
   
   @media only screen and (max-width: 900px){
      display: flex;
      flex-wrap: wrap;
   }
  @media only screen and (min-width: 900px) and (max-width: 1200px){
    display: flex;
      flex-wrap: wrap;
  }
`

export const Card = styled.div`
  width: 250px;
  height: 160px;
   
  background-color: #ffffff;
  border-radius: 8px;
   box-shadow: 0 0 1px #b6b4b4;
   
   &:hover{
     box-shadow:0 2px 5px #c2c6c4;
     .hover{
      box-shadow: 0 0 5px #c2c6c4;
     }
     transition:all 0.6s ;
   }
   
     @media only screen and (max-width: 600px){
     width: 90%;
     margin: 10px auto;
     display: block;
     }
     @media only screen and (min-width: 600px) and (max-width: 900px){
     width: 48%;
     margin: 7px auto;
     }
      @media only screen and (min-width: 900px) and (max-width: 1200px){
      width: 48%;
      margin-top: 20px;
     }
       @media only screen and (min-width: 1200px) and (max-width: 1350px){
         width: 24%;
        }
     
     
   h5{
   margin-top: .5rem;
     padding-left: 1.2rem;
   }
   
  .CardIcon{
     background-color:#EDF6FF; 
      @media only screen and (max-width: 600px){
        margin-top: 15px;
       }
      
   }
   .CardTwo{
    background-color: #EFECFF;
   }
   .CardThree{
    background-color: #FAEBFF;
   }
   .CardFour{
    background-color: #FFECF2;
   }
   
   .num{
     text-align: left;
     font-size: 20px;
     font-weight: bold;
     width:85%;
     margin: 10px auto;
     

  @media only screen and (max-width: 600px){
   margin-top: 20px;
   margin-left: 30px;
 }  

   }
   .titles{
   width: 85%;
   justify-content: space-between;
   display: flex;
   margin: 10px auto;   
   
   .today{
    
    color: grey;
    font-weight: 600;
    
    
    
   }
   .protsent{
    font-weight: bold;
    color:#4FBD80;
   }
   }
   
   
    

   
`

export const CardIcon = styled.div`
    width:45px;
    height: 45px;
    margin-left: 18px;
    margin-top: 18px;
    
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
      @media only screen and (max-width: 600px){
         transform:translateY(8px) translateX(10px);
       }
   
    
   
   .Icon{
     font-size: 22px;
   }
   .Dolor{
     color: #46A5FD;
   }
   .HandDolor{
    color: #5345FF;
   }
   .Peoples{
    color: #CA36FE;
   }
   .Cart{
    color: #FF3673;
   }
   
  
`

export const ChartDiv = styled.div`
width: calc(100% - 5%);
 
margin: 20px auto 50px auto;
 


`
export const Charts = styled.div`
 width: calc(100% - 40%);
 padding: 1rem 1rem 2rem 1rem;
 height: 300px;
 background-color: #ffffff;
 border-radius: 10px;
h4{
 margin-left: 18px;
 
}
@media only screen and (max-width: 600px){
   width:90%;
   margin: 0 auto;
   
}

@media only screen and (min-width: 600px) and (max-width: 900px){
  width: 98%;
  margin: 0 auto;
}
      @media only screen and (min-width: 900px) and (max-width: 1200px){
       width: 98%;
      }
@media only screen and (min-width: 1200px) and (max-width: 1350px){
 width: 58.5%;
}
      

`





export const AnaliticStyle = styled.div`
background-color: #ffffff;
 width: 403px;
 border-radius: 8px;
 padding: 1rem 1rem 0 1rem;


@media only screen and (max-width: 600px){
 width: 90%;
 margin: 20px auto;
}
@media only screen and (min-width: 600px) and (max-width: 900px){
 width: 98%;
 margin: 20px auto;
}
 @media only screen and (min-width: 900px) and (max-width: 1200px){
  margin-top: 20px;       
  width: 98%;
}
@media only screen and (min-width: 1200px) and (max-width: 1350px){
width: 40%;
}

`

export const Tabs = styled.div`
width: calc(100%);
display: flex;
justify-content: space-between;
margin-top:20px ;


@media only screen and (max-width: 600px){
   margin-bottom: 150px;
  display: block;
}

@media only screen and (min-width: 600px) and (max-width: 900px){
  display: block;
    margin-bottom: 100px;
}

 @media only screen and (min-width: 900px) and (max-width: 1200px){
  display: block;
    margin-bottom: 50px;
  
 }



`


export const Tables = styled.div`
 width: calc(60%);
height: 300px;
background-color: #ffffff;
border-radius: 8px ;
 padding: 1rem;
 overflow: auto;
 
 &::-webkit-scrollbar{
   width: 5px;
 }
 
 .h5{
 padding-left: 1.5rem;
 letter-spacing: 0;
 margin-bottom: 15px;
 }
 
 
@media only screen and (max-width: 600px){
   width: 90%;
  margin: 0 auto;
}
 @media only screen and (min-width: 600px) and (max-width: 900px){
   width: 98%;  
   margin:0 auto;
 }
  @media only screen and (min-width: 900px) and (max-width: 1200px){
   width: 98%;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1350px){
 width: 58.5%;
}
 
`

export const Table = styled.table`
  width: calc(100% );
  
  .th{
  position: sticky;
  top: -18px;
  background-color: white;
  }
  
`
export const Tr = styled.tr`

`
export const Th = styled.th`
  padding-left: 1.5rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #ece9e9;

`
export const Td = styled.td`
 padding-left: 1.5rem;
   border-bottom: 1px solid #f5f2f2;
   padding-bottom: .5rem;
   padding-top: .5rem;
   button{
    width:30px;
    height: 25px;
    background-color: white;
    border: none;
   
    color: #c418ad;
    border-radius: 8px;
   }
   
    .edit{
  background-color: #95db40;
  color:#00cb6c;
  margin-right: 8px;
  border-radius: 5px;
 }
 .delete{
  background-color: #fcf3f3;
  color: #ec6e72;
  border-radius: 5px;
 }
   
   
`

export const Thead = styled.thead`


`

export const Tbody = styled.tbody`


`

 export const But = styled.div`
 display: flex;
 
 .edit{
  width: 30px;
  height: 30px;
  background-color: #e4f3e3;
  color:#00cb6c;
  margin-right: 10px;
  padding-bottom: 2px;
  border-radius: 5px;
 }
 .edit:hover{
  background-color: transparent;
   color:#00cb6c;
   transition-duration: .5s;
 }
 .delete{
  width: 30px;
  height: 30px;
  background-color: #f8eded;
  color: #f16469;
  border-radius: 5px;
  padding-bottom: 2px;
 }
 .delete:hover{
   background-color: transparent;
    color: #f16469;
    transition-duration: .5s;
 }
 

`

export const ChartsContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

 @media only screen and (max-width: 600px){
   display: block;
 }

  @media only screen and (min-width: 600px) and (max-width: 900px){
  display: block;
  }
@media only screen and (min-width: 900px) and (max-width: 1200px){
  display: block;
}

`


export const Cust = styled.div`
 width: calc(38%);
 padding: 1rem 1rem 2rem 1rem;
 height: 300px;
 background-color: #ffffff;
 border-radius: 10px;
`