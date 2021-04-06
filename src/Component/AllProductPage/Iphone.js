import React, { useState, useEffect } from  'react'
import PageStructure from '../Template/PageStructure'
import iPhone from '../../Image/technologies/Iphone 1.png'
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
                        <div className='p-container'>
                            <p className='i-phone-p'>The future is here. Join the iPhone Upgrade</p>
                            <p className='i-phone-p'>Program to get latest iPhone - Now!</p>
                        </div>
                        <p className='i-phone-shipping-date'>Starts shipping {data.iphone}</p>
                    </div>
                    <div className='i-phone-img-container'>
                        <img className='img-i-phone' alt="iPhone" src={iPhone}/>
                    </div>
                    <Icon />
                </div>
                <div>
                    <p>Form $699</p>
                    <p>buy Now > </p>
                </div>
            </div>
        </>
    )
}



export default Iphone
