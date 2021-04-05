import React from 'react'
import { IconContext } from "react-icons";
import { MdPhoneIphone, MdLaptopMac } from "react-icons/md";
import { CgAppleWatch } from "react-icons/cg";
import './Icon.scss'

const Icon = () => {
    return (
        <IconContext.Provider value={{ size: "20px", color: " rgb(173, 173, 173)" }}>
            <div className='icons-container'>
                <MdPhoneIphone />
                <MdLaptopMac />
                <CgAppleWatch />
            </div>
        </IconContext.Provider>

    )
}

export default Icon
