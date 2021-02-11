import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
             <h1>Welcome to Kevin's World</h1>
             <Typed
               className="typed-text"
               strings={["Hello","My Name is Kevin","Glad to see U"]}
               typeSpeed={40}
               backSpeed={60}
               loop
             />
             <a href ="Myinfo" className="btn-main-offer">Contact ME!</a>
            
            </div>
        </div>

    
    )
}

export default Header




