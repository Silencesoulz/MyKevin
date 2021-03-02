import React, {Component} from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
 
    return (
        <section id = "Home">
           <div className="header-wraper">
            <div className="main-info">
                <Particles
                    className="tsparticles-canvas-el" 
                    params={{
                    particles: {
                    number:{
                    value: 2,
                    density: {
                    enable: true,
                    value_area:400
                     }
                },
                    shape: {
                    type: "triangle",
                    stroke: {
                    width: 4,
                    color: "#183F55"
                    }
                }
                }
            }}
      />    
      
        <div className="for-name">
            <h1>Hi, I am</h1>
            </div>
                <br />
                <span>
                <Typed
                className="typed-name"
                strings={["Kevin Wu&nbsp;"]}
                typeSpeed={80}
                />
                </span>
                
                <br />
                <br />
                <br />

                <Typed
                className="typed-text"
                strings={["&nbsp;Learner.","&nbsp&nbsp;Motivation.","&nbsp;&nbsp;Developer."]}
                typeSpeed={70}
                backSpeed={50}
                loop
                />
            <div>
            </div>
            </div>
        </div>
        
        </section> 
       

      
        
    
    )
}

export default Header




