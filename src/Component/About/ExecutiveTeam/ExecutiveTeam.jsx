import React,{Fragment, useState} from 'react'
import { Teamdetails } from './Teamdetails'
import "./team.css"
import{BsFacebook,BsLinkedin} from "react-icons/bs"
import {GrTwitter} from "react-icons/gr"


const ExecutiveTeam = () => {
    const[detail, setDetail] = useState(Teamdetails);
  return (
    <Fragment>
      
<section className='team' >

<div className="team-heading">
   
    <h2> EXECUTIVE TEAM</h2>

</div>

<div className="team-row">
    {
        detail.map((detail) =>{
            return(
                <div className="team-column">
                    <div className="team-card">
                        <div className="team-thumb">
                            <img src={detail.Image} alt="teamphoto" />
                            
                            <div className="social-link"> 
                                <ul>
                                    <li>
                                        <a href={detail.fb}> <i className='fa-brands fa-facebook' > <BsFacebook/> </i> </a>
                                    </li>
                                    <li>
                                        <a href={detail.twitter}> <i className='fa-brands fa-twitter' >  <GrTwitter/> </i> </a>
                                    </li>
                                    <li>
                                        <a href={detail.linkedin}> <i className='fa-brands fa-linkedin' > <BsLinkedin/> </i> </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="team-info">
                            <h3>{detail.name}</h3>
                            <p>{detail.info}</p>
                        </div>

                    </div>
                </div>

            )
        })
    }
</div>

</section>

    </Fragment>
  )
}

export default ExecutiveTeam
