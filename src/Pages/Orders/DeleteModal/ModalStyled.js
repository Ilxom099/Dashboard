import styled from 'styled-components'


export const Buttons = styled.div`
 width: 90%;
 margin:0 auto;
text-align: center;
`


export const BtnOk = styled.button`
width: 120px;
border-radius: 8px;
border: none;
background-color: #fad4d4;
color: #f55656;
font-weight: bold;
padding: .2rem 1rem;

&:hover{
 background-color: transparent;
 transition-duration: .5s;
}
`
export const Delete = styled.div`
font-size: 50px;
width: 100%;
text-align: center;
margin: 0 auto;
color: #e36060;

transform: translateY(-58px);
span{
border: 3px solid #fad4d4;
box-shadow: 0 0 5px #fad4d4;
background-color: white;
border-radius: 50%;
 width: 50px;
 height: 50px;
 padding: 0.1rem .8rem;
}

`

export const DelText = styled.div`
font-weight: bold;
font-size: 18px;
width: 100%;
text-align: center;
transform: translateY(-20px);

`