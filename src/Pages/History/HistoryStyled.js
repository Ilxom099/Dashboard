import styled from "styled-components";

export const Histor = styled.div`
width: 100%;
 
background-color:#f5f5f5;

@media only screen and (min-width: 900px) and (max-width: 1200px){
      width: calc(100% - 20%);
      
}
`
export const HisHead = styled.div`
display: flex;
justify-content: space-between;
width: calc(100% - 3%);
margin: 30px 0;
font-size: 22px;
font-weight: bold;

@media only screen and (max-width: 600px){
  margin: 15px 20px;
}
@media only screen and (min-width: 600px) and (max-width:900px){
  
   width: 100%;
}

.Title{
 width: calc(100% - 20%);
 margin: 0 auto;
}
 
`

export const Cards = styled.div`
width: calc(100% - 5%);
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;

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
  width: 300px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
   box-shadow: 0 0 1px #b6b4b4;
   margin-bottom: 20px;
   padding: 0 .7rem;
   overflow: hidden;
    
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
 
`

export const Icon = styled.div`
 width: 90%;
 img{
   width: 100%;
 }
`

export const Date = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 20px;
`

export const Title = styled.div`
 
display: flex;

.title{
font-weight: 600;
}

`

export const Box1 = styled.div`
  
 width: 6%;
`
export const Box2 = styled.div`
 
 width: 36.5%;
 padding-left: 5px;
`
export const Box3 = styled.div`
 
 width: 21%;

`
export const Box4 = styled.div`
 
 width: 36.5%;
 padding-left: 15px;
`

export const Body = styled.div`
overflow-y:auto ;
 
 

 

`


export const Lengths = styled.div`
 display: flex;
 justify-content: space-around;
  margin-top: 20px;
  
 .tength{
    border:1px solid #c1bfbf;
    padding: .3rem .3rem;
    border-radius:8px;
    font-weight: 500;
    box-shadow: 0 0 3px #bfbfbf;
 }
 .tength:hover{
    background-color: #ebf0f1;
 }
 
  

`