import React from "react";
import "./Footer.css";
import { BsFacebook, BsGithub } from "react-icons/bs";
// import {MdEmail} from "react-icons/md"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer_left">
            <h3> About Us </h3>
            <p>
              AMC IT CLUB is a student run club that provides a platform for
              student to learn , collaborate , and develop their skill in the
              field of information Technology.
            </p>
          </div>
          <div className="footer_middle">
            <h3>Contact Us</h3>
            <p>
              Ghorahi 15,Ambikshwari campus
              <br />
              Email:amcitclub@gmail.com
            </p>
          </div>

          <div className="footer_right">
            <ul className="social-link">
              <h3>Socail Media</h3>
              <li>
                <a href="https://www.facebook.com/amcitclub">
                {" "}
                  
                  <i className="fa-brands fa-facebook">
                    {" "}
                    <BsFacebook />{" "}
                  </i>{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://github.com/amcitclub">
                  {" "}
                  <i className="fa-brands fa-github">
                    {" "}
                    <BsGithub />{" "}
                  </i>
                  Github{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            copyright &copy;2023 AMCITCLUB. Designed by{" "}
            <span>Milan Bhandari</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
