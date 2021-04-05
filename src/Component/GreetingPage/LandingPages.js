import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillApple } from "react-icons/ai";
import './LandingPages.scss'


const LandingPages = () => {
    return (
        <>
            <div className="nav-bar-landing-page">
                <AiFillApple size='32px' color='white' />
            </div>
                <div className='landing-page-container'>
                    <div className='content-container'>
                        <Link to='/welcomePage' className='new-product-link'><h1 className='new-product-title'>New Products Coming This Summer</h1></Link>
                        <p className='year'>2019</p>
                    </div>
                </div>
        
        </>
    )
}

export default LandingPages