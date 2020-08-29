import React from 'react'
import logo from '../../logo.svg'
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours" />
      <ul className="nav__links">
        <li>
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav__link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav__link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
