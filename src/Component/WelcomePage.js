import React from 'react'
import { IconContext } from "react-icons";
import { MdPhoneIphone, MdLaptopMac } from "react-icons/md";
import { CgAppleWatch } from "react-icons/cg";
import './WelcomePage.scss'

const WelcomePage = () => {
    return (
        <div className='welcome-page-container'>
            <div className='content-container'>
                <h1 className='welcome-title'>Welcome to Apple</h1>
                <p className='see-product'>see our Products</p>
                <IconContext.Provider value={{ size: "20px", color: " rgb(173, 173, 173)" }}>
                    <div className='icons-container'>
                        <MdPhoneIphone />
                        <MdLaptopMac />
                        <CgAppleWatch />
                    </div>
                </IconContext.Provider>
           </div>
        </div>
    )
}

export default WelcomePage
