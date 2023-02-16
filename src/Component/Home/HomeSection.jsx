import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from '../Common/Button/Button.js'


const HomeSection = () => {


  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="main-content">
          <h1 className="heading">AMC IT CLUB</h1>
          <p className="home-paragraph">
          Welcome to the AMC IT Club! We are a community of individuals interested in all things technology. Our goal is to provide a space for members to learn, share, and grow their knowledge of the latest trends and developments in the field of information technology. We offer a variety of events and activities, including workshops, lectures, and hackathons , as well as opportunities to network with professionals and connect with like-minded individuals. 
          </p>
          <Button className="btn home-btn">
            <NavLink to="/contact"> Contact Us </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="home-img-section">
          <picture>
            <img src="/HomeImage/home.jpg" alt="Home-image" className="home-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`


  .main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 17rem;
    border-radius:10px;
    margin-left:18px;
    
  
  }
  .btn:hover{
    background-color: rgb(98 84 243);
  }


  .home-paragraph  {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    margin-left:18px;
    
  }

  .home-img-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .home-img{
    max-width: 80%;
    border-radius:10px;
  }


  // for mobile devices
  @media screen and (max-width:768px){

    .home-img{
      border-radius:10px;
    }
    .btn{
      margin:2rem 0;
    }
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}) 
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HomeSection;
