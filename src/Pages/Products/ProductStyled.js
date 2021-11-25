import styled from "styled-components";

export const But = styled.div`
 display: flex;
 
 .edit{
  width: 35px;
  height: 30px;
  background-color: #e4f1e2;
  color:#00cb6c;
  margin-right: 10px;
  padding-bottom: 2rem;
  border-radius: 5px;
  font-size: 20px;
 }
 
 .edit:hover{
   background-color: transparent;
     color:#00cb6c;
     transition-duration: .5s;
 }
 
 .delete{
  width: 35px;
  height: 30px;
  background-color:#f8e4c2;
  color: #f1ad4b;
  font-size: 20px;
  
  border-radius: 5px;
  padding-bottom: 2rem;
 }
 
 .delete:hover{
  background-color: transparent;
   color: #f1ad4b;
   transition-duration: .5s;
 }
 

`