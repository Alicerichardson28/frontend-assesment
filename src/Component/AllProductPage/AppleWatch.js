import React, { useState, useEffect } from  'react'
import PageStructure from '../Template/PageStructure'
import blackWatch from '../../Image/technologies/Black Watch-1.png'
import Icon from '../Template/Icon'
import './AppleWatch.scss'

const AppleWatch = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://boalt-interview.herokuapp.com/api/shipping-dates")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    },[])

    return (
        <>
            <PageStructure/>
            <div className='apple-watch-page-container'>
                <div className='top-section-apple-watch-page'>
                    <div className='top-content-container'>
                        <h2 className='apple-watch-h2'>Apple Watch</h2>
                        <h1 className='apple-watch-h1'>Change starts</h1>
                        <h1 className='apple-watch-h1'>within.</h1>
                        <div className='top-section-p-container'>
                            <p className='top-apple-watch-p'>Apple Watch Series 4. Fundamentally redesigned and</p>
                            <p className='top-apple-watch-p'>re-engineered to help you be even more active,</p>
                            <p className='top-apple-watch-p'>healthy, and connected</p>
                        </div>
                        <p className='apple-watch-shipping-date'>Starts shipping {data.watch}</p>
                    </div>
                    <div className='apple-watch-img-container'>
                        <img className='img-apple-watch' alt="iPhone" src={blackWatch}/>
                    </div>
                    <Icon />
                </div>
                <div className='second-section-apple-watch-page'>
                    <div className='second-section-p-container'>
                        <p className='second-apple-watch-p'>From $699</p>
                        <p className='apple-watch-buy-now'>Buy Now > </p>
                    </div>
                    <div className='apple-watch-icons-container'>
                        <div className='white-circle-container'>
                            <div className='white-circle'>
                                <div className='white-circle-in-side'></div>
                            </div>
                            <p className='color-title'>white</p>
                        </div>
                        <div className='white-circle-container'>
                            <div className='black-circle'>
                                <div className='black-circle-in-side'></div>
                            </div>
                            <p className='color-title'>black</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppleWatch
