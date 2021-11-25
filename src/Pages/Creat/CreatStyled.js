import styled from 'styled-components'

export const CreatPage = styled.div`
width: calc(100% - 15%);
  transform: translateX(-15px);
 margin-top: 10px ;
 border-radius: 8px;
background-color:#ffffff;

@media only screen and (max-width: 600px){
 width: 100%;
   transform: translateX(0px) !important;
    margin: 0;
}

@media only screen and (min-width: 600px) and (max-width: 900px){
 width: 100%;
 transform: translateX(0);
 margin-bottom: 50px;
}

 @media only screen and (min-width: 900px) and (max-width: 1200px){
  width: 78%;
  margin: 0 auto;
  transform: translateX(0);
}


`

export const CreatTitle = styled.div`
width: calc(100% - 5%);
background-color:white ;
margin: 0 auto;

@media only screen and (max-width: 600px){
 width: 90%;
  transform: translateX(0px);
  
}

`
export const Header = styled.div`
 font-weight: 600;
 font-size: 22px;
 margin-top: 20px;
`
export const Titles = styled.div`
color: #686868;
margin-top: 20px;
font-weight: 600;
span{
 color: darkgrey;
}
`

export const Body = styled.div`
width: calc(100%);
margin-top: 20px;
display: flex;
 
@media only screen and (max-width: 600px){
display: block;
  
}
`

export const EditOne = styled.div`
 width: 60%;
 margin-bottom: 50px;
background: #ffffff;
box-shadow: 0 5px 10px #dedcdc;
border-radius: 8px;


@media only screen and (max-width: 600px){
 width: 100%;
 padding-top: 10px;
 margin-bottom: 0;
}

.avform{
 border-radius: 8px;
 margin: 20px auto;
 
}

`

export const EditTwo = styled.div`
width: 90%;
margin-left: 5%;
border-radius: 8px;
 
background: #ffffff;
 box-shadow: 0 5px 10px #dedcdc;
`

export const Name = styled.div`
width: 90%;
margin: 0 auto;

.avform{
  height: 50px;
}

.textArea{
 border: 1px solid #d9d7d7;
 border-radius: 8px;
}

.invalid-feedback{
  display: none !important;
}

`

export const Textarea = styled.div`
margin-top: 20px;

 .des{
 margin-bottom: 10px;
 font-weight: 600;
 color: grey;
}

.file{

}

`

export const Image = styled.div`
width: 90%;
margin: 0 auto;

`

export const ImgLabel = styled.label`
width: 100%;
  height: 50%;
  border-radius: 8px;  
  border: 1px solid #d9d7d7;
  font-family: 'Prompt', sans-serif !important;
  background-color: #F4F6F8;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  overflow: auto;
  
    @media only screen and (max-width: 600px){
    text-align: center;
    }
    @media only screen and (min-width: 600px) and (max-width: 900px){
     text-align: center;
    }
  .imag{
    width: 200px;
    height: 200px;
    margin-left: 20px;
    @media only screen and (max-width: 600px){
     width: 150px;
     height: 150px; 
    }
    @media only screen and (min-width: 600px) and (max-width: 900px){
    width: 160px;
    height: 160px;
    }
     @media only screen and (min-width: 900px) and (max-width: 1200px){
      width: 160px;
      height: 160px;
       margin-left: 0;
     }
  }
  
  span{
    font-size: 22px;
    font-weight: 600;
    color:#323131;
    margin-left: 20px;
    @media only screen and (max-width: 600px){
     font-size: 17px;
     display: block;
     text-align: center;
     margin-left: 0;
    }
    @media only screen and (min-width: 600px) and (max-width: 900px){
     font-size: 18px;
     display: block;
     margin-left: 0;
     text-align: center;
    }
    
     @media only screen and (min-width: 900px) and (max-width: 1200px){
     font-size: 18px;
     
    }
  }
  
`

export const Price = styled.div`
  padding-top: 20px;
   width: calc(100% - 10%);
  margin: 0 auto;
  text-align: left;
  padding-bottom: 20px;
  .avform{
  margin-bottom:20px;
   border-radius: 8px;
   height: 50px;
   &::placeholder{
     color: darkgrey;
   }
  }
  
  .cat{
  width: 100% !important;
  }
  .ant-select-selector{
  padding-top:10px !important;
   height: 50px!important;
   border-radius: 8px !important;
  }
  
.invalid-feedback{
  display: none !important;
}
  
`

export const Label = styled.label`
font-size: 20px;
color: #8f9090; 
font-weight: bold;
margin-bottom: 10px;
`

export const Buts = styled.button`
 width: 90%;
 margin:40px auto;
 background: #75B687;
 height: 40px; 
 border-radius: 8px;
 border: none;
 color: white;
 
 @media only screen and (max-width: 600px){
  margin-bottom: 100px;
 }
 
 &:hover{
   background: white;
   color:  #75B687;
   box-shadow: 0 0 5px #75B687;
   transition-duration: .3s;
 }
 &:active{
   background:  #9fe0b2;
   color: white;
 }
 
`


export const Right = styled.div`
width: 38%;
margin-left: 1%;
text-align: center;

@media only screen and (max-width: 600px){
 width: 100%;
}
`




export const Img = styled.img`
  width:100%;
  height: 100%;
  display: block;
  margin: 0 auto !important;
 overflow-y: auto;
  
`

