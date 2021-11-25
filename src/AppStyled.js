import styled from "styled-components";




export const Dashboard = styled.div`
width: 100%;
 

background-color:#f5f5f5;
display: flex;
`

export const Sid = styled.div`
width: calc(100% - 80%);


  @media only screen and (max-width: 900px){
      display: none;
  }
  
  @media only screen and (min-width: 900px) and (max-width: 1200px){
  
  }

`


export const MobilNav = styled.div`

    width: calc(100%);
    position: fixed;
    height: 70px;
    display: none;
    bottom: -5px !important;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
     @media only screen and (max-width: 900px){display: flex;}

.main-nav-active{
 background-color: #6284F0;
 color: white;
}

 .mobilLinks{
   background-color:#ebebec;
   padding: 0.3rem 0.6rem;
   border-radius: 10px;
   
 }
i{
color: #797575;
 font-size: 18px;
}
.main-nav-active{
    background-color: #6284F0!important;
   
}
.main-nav-active i {
    color: white !important;
}


`