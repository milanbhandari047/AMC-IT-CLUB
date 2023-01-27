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

`;

export default Header

