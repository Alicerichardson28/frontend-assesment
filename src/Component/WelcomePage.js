import React from 'react'
import { IconContext } from "react-icons";
import { MdPhoneIphone, MdLaptopMac } from "react-icons/md";
import { CgAppleWatch } from "react-icons/cg";
import { AiFillApple } from "react-icons/ai";
import './WelcomePage.scss'

const WelcomePage = () => {
    return (
        <>
            <div className="nav-bar-welcome-page-logo">
                <AiFillApple size='45px' color='white' />
            </div>
            <div className="nav-bar-welcome-page-list">
                <a href="#" className="nav-link">iPhone</a>
                <a href="#" className="nav-link">MacBook Pro</a>
                <a href="#" className="nav-link">Watch</a>
                <a href="#"  className="nav-link-notify-me">Notify me</a>
            </div>
            <div className='welcome-page-container'>
                <div className='content-container'>
                    <h1 className='welcome-title'>Welcome to Apple</h1>
                    <p className='see-product'>See our Products</p>
                    <IconContext.Provider value={{ size: "20px", color: " rgb(173, 173, 173)" }}>
                        <div className='icons-container'>
                            <MdPhoneIphone />
                            <MdLaptopMac />
                            <CgAppleWatch />
                        </div>
                    </IconContext.Provider>
            </div>
            </div>
        </>
    )
}

export default WelcomePage
