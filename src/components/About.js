import { render } from '@testing-library/react';
import React from 'react'
import Pulse from 'react-reveal/Pulse';
import logo from "../logo2.png";
import kevin from "../KevinIMG.png";
import { DivMode } from 'react-particles-js';

const About = () => {
    return (   
        <section id ="About">
    <div className= "about-wraper">
            <br/><br/>
                <Pulse>
                <div className ="about-toptext"><h1>&nbsp;&nbsp;&nbsp;About me</h1>
                </div>
                </Pulse>
                <div className = "about-undertop">
                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A briefly introduction about myself</b>
                    <img src ={kevin} className = "kevin-pic" />
                </div>   
                <div className = "about-content">
                 <h3>Kevin Wu</h3>  
                 <h5>Information Engineering</h5> 
                 <br />
            <p> I am currently a third year undergraduate of Information engineering from King Mongkut's Institute of Technology Ladkrabang . I enjoy learning and am eager to pick up new     skills. I learn quickly and adapt well to new techniques and challenges.
                I am interested in Database, Cloud Architecture, Backend
                and Operating system. I also can communicate with each other in Thai and English.
            </p>
            <br />
            <p>
            Other interested <br />
            - Languages ( German, Korean ) <br />
            - Sports ( Bowling, Billiards ) <br />
            - Coding ( Web Developer )
            </p>
            <br />
            <br />
            <button>My resume</button>
                    
            
                </div>
            </div>
               
               
            
    
            
       
    </section>
    )
}


export default About



