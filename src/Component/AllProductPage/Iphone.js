import React, { useState, useEffect } from  'react'
import PageStructure from '../Template/PageStructure'
import iPhone from '../../Image/technologies/Iphone 1.png'
import iPhoneSmallFront from '../../Image/technologies/apple-iphonexs-max-gold.png'
import iPhoneSmallBack from '../../Image/technologies/apple-iphonexs-max-gold-back-1.png'
import Icon from '../Template/Icon'
import './Iphone.scss'

const Iphone = () => {
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
            <div className='i-phone-page-container'>
                <div className='top-section-i-phone-page'>
                    <div className='top-content-container'>
                        <h2 className='i-phone-h2'>iPhone</h2>
                        <h1 className='i-phone-h1'>The Ultimate</h1>
                        <h1 className='i-phone-h1'>iPhone</h1>
                        <div className='top-section-p-container'>
                            <p className='top-i-phone-p'>The future is here. Join the iPhone Upgrade</p>
                            <p className='top-i-phone-p'>Program to get latest iPhone - Now!</p>
                        </div>
                        <p className='i-phone-shipping-date'>Starts shipping {data.iphone}</p>
                    </div>
                    <div className='i-phone-img-container'>
                        <img className='img-i-phone' alt="iPhone" src={iPhone}/>
                    </div>
                    <Icon />
                </div>
                <div className='second-section-i-phone-page'>
                    <div className='second-section-p-container'>
                        <p className='second-i-phone-p'>From $699</p>
                        <p className='i-phone-buy-now'>Buy Now > </p>
                    </div>
                    <div className='second-section-img-container'>
                        <div className='img-container'>
                            <img alt='front i phone small' className='img-second-section' src={iPhoneSmallFront}/>
                            <img alt='back i phone small' className='img-second-section' src={iPhoneSmallBack}/>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}



export default Iphone
