import React, {useState} from 'react'

const LoginForm = () => {
    const [fullName, setFullName] = useState("");
    const [passWord, setPassWord] = useState("");

    // declare state for handle error
    const [fullNameErr, setFullNameErr] = useState({});
    const [passWordErr, setPassWordErr] = useState({});

    // create validate 
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation = () => {
        const fullNameErr = {}; 
        const passWordErr = {}; 
        let isValid = true;

        // handle error from Full name
        if(!fullName.trim()){
            fullNameErr.firstNameRequired = "Full name required";
            isValid = false;
        }

        //  handle error from Password
        if(!passWord.trim()){
            passWordErr.passWordRequired = 'Password is required'
        }

        setFullNameErr(fullNameErr);
        setPassWordErr(passWordErr);
        return isValid;
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Full name</label>
            <input 
                type="text"
                value={fullName}
                onChange={(e)=>{setFullName(e.target.value)}}
            />
            {Object.keys(fullNameErr).map((key)=>{
                return <div style={{color : "red"}}>{fullNameErr[key]}</div>
            })}
            <label>Password</label>
            <input 
                type="password"
                value={passWord}
                onChange={(e)=>{setPassWord(e.target.value)}}
            />
            {Object.keys(passWordErr).map((key)=>{
                return <div style={{color : "red"}}>{passWordErr[key]}</div>
            })}
            <button type="submit">Sign-In</button>
        </form>
    )
}

export default LoginForm
