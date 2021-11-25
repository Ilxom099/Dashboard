import styled from 'styled-components'

export const Side = styled.div`
width: calc(100% - 83%);
height: 100%;
background-color: #ffffff;
position: fixed;


@media only screen and (min-width: 900px) and (max-width: 1200px){
      width: calc(100% - 80%);
}

`


export const Brend = styled.div`

height: 90px;
padding: .2rem 0 1rem 1rem;
color: #9CA2A7;
 


@media only screen and (min-width: 900px) and (max-width: 1200px){
      
}
`

export const Li = styled.li`
 transform: translateX(-18px);
 margin-bottom: 1rem;
 font-weight: bold;
  
 padding: 12px;
 border-radius: 8px;
i{
color: #8f9397;
  font-weight: bold;
  font-size: 20px;
 
}
span{
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
   margin-left: 5px;
}

`

export const SideMenu = styled.div`

 
 

.main-nav{
    color: #9CA2A7;
    
}

.main-nav-active{
i{
    color:#48A4FC;

}
    color:#48A4FC;
   
    Li{
      
      border-radius: 10px;
      background: #edf6ff;
      
    }
}
`

export const LogOut = styled.div`
  padding-left: 10%;
  position: absolute;
  top: 90%;
  color: #62676f;
  font-size: 18px;
  font-weight: bold;

.logIcon{
 font-size: 28px;
 margin-right: 10px;
}
span{
font-size: 16px;
}
`