import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillApple } from "react-icons/ai";


const PageStructure = () => {
    return (
        <>
        <div className="nav-bar-welcome-page-logo">
            <Link to="/landingPage">
                <AiFillApple size='45px' color='white' />
            </Link>
        </div>
        <div className="nav-bar-welcome-page-list">
            <a href="#" className="nav-link">iPhone</a>
            <a href="#" className="nav-link">MacBook Pro</a>
            <a href="#" className="nav-link">Watch</a>
            <a href="#"  className="nav-link-notify-me">Notify me</a>
        </div>
    </>
    )
}

export default PageStructure
