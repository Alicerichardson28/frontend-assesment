import React from 'react'
import PageStructure from '../Template/PageStructure'
import Icon from '../Template/Icon'
import './WelcomePage.scss'

const WelcomePage = () => {
    return (
        <>
            <PageStructure/>
            <div className='welcome-page-container'>
                <div className='content-container'>
                    <h1 className='welcome-title'>Welcome to Apple</h1>
                    <p className='see-product'>See our Products</p>
                    <Icon/>
                </div>
            </div>
        </>
    )
}

export default WelcomePage
