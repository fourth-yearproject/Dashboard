import "./navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header"> 
        <Link to="/">
            <h1>logo</h1>
        </Link>
        <ul className="nav-bar_menu">
            <li>
                <Link to="/loan">
                    loan
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar