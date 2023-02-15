import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'


const Header = () => {
  return (
    <MainHeader >

<NavLink to ="/" >
<img src="/Logo/amcitclub-logo.png"  className="logo" alt="logo"  />

</NavLink>

<Navbar/>

    </MainHeader>
  )
}

const MainHeader = styled.header`
padding:0 4.8rem;
height:10rem;
line-height:10rem;
background-color:rgb(171, 207, 207);
display:flex;
justify-content:space-between;
align-center:center;


.logo{
  height:auto;
  max-width:25%;

}

 @media screen and (min-width:430px) and (max-width:768px){
    .logo{
height:auto;
max-width:80px;

    }
}  

@media screen and (min-width:768px) and (max-width:960px){
  .logo{
height:auto;
max-width:70px;
margin-left:-40px;

  }
}  


@media screen and (min-width:960px) {
  .logo{
height:auto;
max-width:100px;

  }
}  

@media screen and (min-width:1500px) {
  .logo{
   margin-left:40px;
    
      }
    }  
}

`;

export default Header

