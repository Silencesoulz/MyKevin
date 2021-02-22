import React, { Component } from 'react'
import logo from "../logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from './Header';
import Myinfo from './About';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid title-container">
        <a className="navbar-brand" href="home"><img className="logo" href="home" src={logo} alt="logo..."/> </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style = {{ color:"#fff" }}/>
        </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="Home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">Skills</a>
          </li>
          </ul>
          
        </div>

    </div>
    
      </nav>
    )
}



export default Navbar
