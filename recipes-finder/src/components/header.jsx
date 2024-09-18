import React from "react";
import logo from '../assets/cookbook.png'
import '../styles/header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo}/>
            <h1>The CookBook</h1>
        </div>
    );
}

export default Header;