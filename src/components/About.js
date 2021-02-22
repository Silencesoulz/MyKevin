import { render } from '@testing-library/react';
import React from 'react'
import Pulse from 'react-reveal/Pulse';
import logo from "../logo2.png";
import kevin from "../KevinIMG.png";
import { DivMode } from 'react-particles-js';
const About = () => {
    return (   
        <section id ="About">
    <div class = "about-wraper">
        <div class = "">
            <br/>
            <br/>
            <br/>
            <Pulse>
            <h1>Hi it's me</h1>
            <img className="kevin-pic" src={kevin} alt="Kevin"/>
            </Pulse>
            <div>
            <b>My name is Kevin Wu</b>
            </div>
            <div className="about-text">
            <p>I am currently a third year undergraduate of Information engineering from King Mongkut's Institute of Technology Ladkrabang . I enjoy learning and am eager to pick up new skills. I learn quickly and adapt well to new techniques and challenges.
            I am interested in Cybersecurity , Network Infrastructure ,
            and IoT (Internet of Things). I also can communicate with each other in Thai and English.</p>
            </div>
            </div>
        </div>
    </section>
    )
}


export default About



