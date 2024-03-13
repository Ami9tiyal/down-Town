import React from 'react';
// import logo from '../logo.svg';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <header className="navbar_box">
                <li>
                    <Link to={"/account"} className={`navbar_item ${location.pathname === "/account" ? "active" : ""}`}>My Account</Link>
                </li>
                <li>
                    <Link to={"/dine"} className={`navbar_item ${location.pathname === "/dine" ? "active" : ""}`}>Dine In</Link>
                </li>
                <li>
                    <Link to={"/menu"} className={`navbar_item ${location.pathname === "/menu" ? "active" : ""}`}>Menu</Link>
                </li>
                <li>
                    <Link to={"/reservation"} className={`navbar_item ${location.pathname === "/reservation" ? "active" : ""}`}>Reservation</Link>
                </li>
                <li>
                    <Link to={"/history"} className={`navbar_item ${location.pathname === "/history" ? "active" : ""}`}>History</Link>
                </li>
            </header>
        </>
    )
}

export default Navbar