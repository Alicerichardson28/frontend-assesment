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
                    <h2>iPhone</h2>
                    <h1>The Ultimate iPhone</h1>
                    <p>The future is here. Join the iPhone Upgrade Program to get latest iPhone - Now!</p>
                    <p>Starts shipping {data.iphone}</p>
                </div>
                <div className='i-phone-img-container'>
                    <img alt="iPhone" src={iPhone}/>
                </div>
                <Icon />
            </div>
        </>
    )
}



export default Iphone
