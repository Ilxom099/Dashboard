import styled from "styled-components";


export const Customer = styled.div`
 background-color: #ffffff;
 width: 403px;
 border-radius: 8px;
 padding: 1rem 1rem 0 1rem;
 display: flex;
 
 h3{
       @media only screen and (min-width: 600px) and (max-width: 900px){
       margin-left: 50%;
       }
 }
 
  @media only screen and (max-width: 600px){
     width: 90%;
     display: block;
     margin: 20px auto;
  }
  
      @media only screen and (min-width: 600px) and (max-width: 900px){
       width: 98%;
       height: 250px;
       margin: 20px auto;
       
      }
      @media only screen and (min-width: 900px) and (max-width: 1200px){
       width: 98%; 
       margin-top: 20px;
      }
      @media only screen and (min-width: 1200px) and (max-width: 1350px){
       width: 40%;
      }
 
 .custom{
  width: 250px;
  height: 250px;
  
   @media only screen and (max-width: 600px){
      width: 230px;
      height: 220px;
      margin: 10px  auto;
      transform: translateX(30px);
      
   }
   @media only screen and (min-width: 600px) and (max-width: 900px){
      width: 70%;
      height: 180px;
      transform: translateX(30px);
   }
   @media only screen and (min-width: 900px) and (max-width: 1200px){
      width: 70%;
      height: 180px;
      transform: translateX(30px);
   }
   
   
 .customMenu{

  
  
   
 }

`
export const CustomMenu = styled.div`
  width: 40%;
  
   @media only screen and (max-width: 600px){
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
   padding-left: 15px;
    padding-bottom: 40px;
   }
`

export const Flex = styled.div`
 display: flex;
 margin-top: 30px;
 
 
 @media only screen and (max-width: 600px){
   margin:10px 0;
   text-align: center;
   display: flex;
   width: 50%;
   
  } 
 
   
  @media only screen and (min-width: 600px) and (max-width: 900px){
   margin: 20px;
  }
  @media only screen and (min-width: 900px) and (max-width: 1200px){
    margin: 20px;
   }
  
  
 .circle{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 10px;
    margin-right:  5px;
    
    @media only screen and (max-width: 600px){
     width: 15px;
     height: 13px;
     margin-top: 13px;
  } 
}

.name{
   font-weight: bold;
   margin-top: 10px;
}

`