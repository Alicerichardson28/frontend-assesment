import React, { useState, useEffect } from  'react'
import PageStructure from '../Template/PageStructure'
// import Icon from '../Template/Icon'
import './Iphone.scss'

const Iphone = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://boalt-interview.herokuapp.com/api/shipping-dates")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    },[])

    console.log(data)
    return (
        <>
            <PageStructure/>
            <div>
                <h1>The ultimate iPhone</h1>
                <p>The future is here. Join the iPhone Upgrade Program to get latest iPhone - Now!</p>
                <p>Starts shipping<h2>{data.iphone}</h2></p>
            </div>
        </>
    )
}

export default Iphone
