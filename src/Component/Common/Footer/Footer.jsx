import React from 'react'
import"./Footer.css"
import{BsFacebook,BsGithub} from "react-icons/bs"
// import {MdEmail} from "react-icons/md"



const Footer = () => {
  return (
    <>
    
<footer>
  <div className="footer-content">
    <h3> About Us  </h3>
    <p>AMC IT CLUB is a student run club that provides a platform for student to learn , collaborate , and develop their skill in the field of information Technology.</p>

    <h3>Contact Us</h3>
    <p>Ghorahi 15,Ambikshwari campus 
      <br />
      Email:amcitclub@gmail.com
    </p>

    <ul className='social-link' >
    <li>
                                        <a href="https://www.facebook.com/amcitclub"> <i className='fa-brands fa-facebook' > <BsFacebook/> </i> </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/amcitclub"> <i className='fa-brands fa-github' >  <BsGithub/> </i> </a>
                                    </li>
                                   
    </ul>
  </div>
  <div className="footer-bottom">
    <p>copyright &copy;2023 AMCITCLUB. Designed by <span>Milan Bhandari</span></p>
  </div>
</footer>

    </>
  )
}

export default Footer



                                    
