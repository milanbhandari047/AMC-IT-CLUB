
import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Button}from '../Common/Button/Button.js'

const Error = () => {
  return (
    <Wrapper>
<img src="/ErrorImage/error.png" alt="Page Not Found" />
<NavLink to="/">
<Button className='btn' >
    Go Back
</Button>
</NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding:9rem 0;
display:flex;
justify-content:center;
text-align:center;
flex-direction:column;
overflow: hidden;


.btn{
    margin-top:3rem;
    font-size:1.8rem;
    width:15rem;
    border-radius:5px;
}



`;

export default Error
