import styled from 'styled-components'

export const Bod = styled.div`
width: calc(100% - 5%);
margin: 0 auto;

`


export const EditImage = styled.div`
width: 100%;
margin: 0 auto;

`

export const EdText = styled.div`
margin-top: 5px; 
 .des{
  font-size: 13px;
  font-weight: bold;
 color: grey;
}

 

`


export const AddFoto = styled.label`
width: 100%;
  height: 150px;
  border-radius: 8px;  
  border: 1px solid #d9d7d7;
  font-family: 'Prompt', sans-serif !important;
  background-color: #F4F6F8;
  margin-top: 10px;
  cursor: pointer;
  
    @media only screen and (max-width: 600px){
    text-align: center;
    height: 140px;
    .imag{
        width: 110px !important;
    height: 110px !important;
    margin-left: 10px !important;
    }
    span{
     display: block;
     transform: translateY(-10px);
    }
    }
    
    
    @media only screen and (min-width: 600px) and (max-width: 900px){
     text-align: center;
    }
  .imag{
    width: 160px;
    height: 160px;
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
`



export const EdLabel = styled.label`
font-size: 13px;
letter-spacing: 1px;
color: #8f9090; 
font-weight: bold;
 
`

export const EdName = styled.div`
width: 90%;
margin: 0 auto;



.Edform{
  height: 30px;
  font-size: 15px;  
}
.Edform::placeholder{
color: #bab6b6;
}
.textArea{
 border: 1px solid #d9d7d7;
 border-radius: 8px;
}

.invalid-feedback{
  display: none !important;
}
`

export const Category = styled.div`
display: block;
.cat{
 width: 100%!important;
 
}
.ant-select-selector{
border-radius: 4px !important;
height: 30px!important;
 
}

`

export const EdButs = styled.button`
 width: 87%; 
 margin-left: 7%;
 background: #75B687;
 height: 35px; 
 border-radius: 8px;
 border: none;
 color: white;
 
 @media only screen and (max-width: 600px){
  margin-bottom: 20px;
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

export const Exit = styled.div`
position: absolute;
left: 90%;
top: 10px;
font-size: 25px;
color: #b4b3b3;
cursor: pointer;
`


export const ModalDiv = styled.div`

 

.Modal{
 
    height: 60% !important;
  overflow-y: auto !important;

}
.Modal::-webkit-scrollbar{
    width: 5px !important;
}

`

export const ImgLab = styled.label`
width: 100%;
  height: 160px;
  border-radius: 8px;  
  border: 1px solid #d9d7d7;
  font-family: 'Prompt', sans-serif !important;
  background-color: #F4F6F8;
  margin-top: 2px;
  cursor: pointer;
   
  overflow: auto;
  
    @media only screen and (max-width: 600px){
    text-align: center;
    }
    @media only screen and (min-width: 600px) and (max-width: 900px){
     text-align: center;
    }
  .imag{
    width: 150px;
    height: 150px;
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
    font-size: 16px;
    font-weight: 600;
    color:#323131;
    margin-left: 20px;
    @media only screen and (max-width: 600px){
     font-size:14px;
     display: block;
     text-align: center;
     margin-left: 0;
    }
    @media only screen and (min-width: 600px) and (max-width: 900px){
     font-size: 16px;
     display: block;
     margin-left: 0;
     text-align: center;
    }
    
     @media only screen and (min-width: 900px) and (max-width: 1200px){
     font-size: 18px;
     
    }
  }
  
`