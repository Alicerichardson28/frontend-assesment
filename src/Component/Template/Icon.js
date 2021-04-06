import React from 'react'
import { IconContext } from "react-icons";
import { MdPhoneIphone, MdLaptopMac } from "react-icons/md";
import { CgAppleWatch } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './Icon.scss'

const Icon = ({page}) => {  
    return (
        <IconContext.Provider value={{ size: "20px", color: " rgb(173, 173, 173)" }}>
            <div className={page === "welcome-page" ? 'icons-container-row' : 'icons-container-column'} >
                <Link to='/iphone'><MdPhoneIphone /></Link>
                <Link to='/laptop'><MdLaptopMac /></Link>
                <Link to='/appleWatch'><CgAppleWatch /></Link>
            </div>
        </IconContext.Provider>
    )
}

export default Icon
