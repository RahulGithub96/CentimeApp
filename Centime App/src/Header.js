import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className='Header'>
            <img src={require("./assets/Centime.PNG")} className="logo" alt="logo"/>
            <nave className="nav">
                <a href="/">Our Solutions</a>
                <a href="/">Pricing</a>
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
                <button>Try it Free</button>
            </nave>
        </header>
    );
  }
  
  export default Header;
  
  