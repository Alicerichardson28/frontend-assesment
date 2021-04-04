import React, {useState} from 'react'
import { Link } from 'react-router-dom';



const SignUpForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");

    // declare state for handle error
    const [fullNameErr, setFullNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [passWordErr, setPassWordErr] = useState({});

    // create validate 
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation = () => {
        const fullNameErr = {}
        const emailErr = {}; 
        const passWordErr = {}; 
        let isValid = true;

        // handle error from Full name
        if(!fullName.trim()){
            fullNameErr.fullNameRequired = "Full name is required";
            isValid = false;
        }
        // handle error from Full name
        if(!email.trim()){
            emailErr.emailRequired = "Email is required";
            isValid = false;
        }

        //  handle error from Password
        if(!passWord.trim()){
            passWordErr.passWordRequired = 'Password is required'
        }

        setFullNameErr(fullNameErr);
        setEmailErr(emailErr);
        setPassWordErr(passWordErr);
        return isValid;
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="form-container">
                <h1 className='sign-in-title'>Sign-Up</h1>
                <div className="form-inputs">
                    <label className="from-label">Full Name</label>
                    <input 
                        placeholder=""
                        className="input-box"
                        type="text"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    {Object.keys(fullNameErr).map((key)=>{
                        return <div style={{color : "red"}}>{fullNameErr[key]}</div>
                    })}
                </div>
                <div className="form-inputs">
                    <label className="from-label">Email</label>
                    <input 
                        placeholder=""
                        className="input-box"
                        type="text"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    {Object.keys(emailErr).map((key)=>{
                        return <div style={{color : "red"}}>{emailErr[key]}</div>
                    })}
                </div>
                <div className="form-inputs">
                    <label className="from-label">Password</label>
                    <input
                        placeholder=""
                        className="input-box" 
                        type="password"
                        value={passWord}
                        onChange={(e)=>{setPassWord(e.target.value)}}
                    />
                    {Object.keys(passWordErr).map((key)=>{
                        return <div style={{color : "red"}}>{passWordErr[key]}</div>
                    })}
                </div>
                <button type="submit" className='sign-in-btn'><p className='sign-in-text'>Sign-Up</p></button>
            </form>
            <div className="not-registered-container">
                <p>Already registered? </p>
                <Link to="/" className='sign-up-link'>sign-In</Link>
            </div>
        </div>
    )
}

export default SignUpForm
