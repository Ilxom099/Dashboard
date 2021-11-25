import styled from "styled-components";


export const Delete = styled.div`
font-size: 50px;
width: 100%;
text-align: center;
margin: 0 auto;
color: #6dd55a;
 
transform: translateY(-58px);

span{
border: 3px solid #dcfad4;
box-shadow: 0 0 5px #dffad4;
background-color: #ffffff;
border-radius: 50%;
 width: 50px;
 height: 50px;
 padding: 0.2rem 1rem;
}

.icons{
transform: translateY(-4px);
}

`
export const Buttons = styled.div`
 width: 90%;
 margin:0 auto;
text-align: center;
 
`

export const BtnOk = styled.button`
width: 120px;
border-radius: 8px;
border: none;
background-color: #fdeaea;
color: #f55656;
font-weight: bold;
padding: .2rem 1rem;
 
&:hover{
 background-color: transparent;
 transition-duration: .5s;
}
`
export const DelText = styled.div`
font-weight: bold;
font-size: 24px;
width: 100%;
text-align: center;
transform: translateY(-20px);

`