import React, {useState} from 'react'

const LoginForm = () => {
    const [fullName, setFullName] = useState("");
    const [passWord, setPassWord] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form>
            <label>Full name</label>
            <input 
                type="text"
                value={fullName}
                onChange={(e)=>{setFullName(e.target.value)}}
            />
            <label>Password</label>
            <input 
                type="password"
                value={passWord}
                onChange={(e)=>{setFullName(e.target.value)}}
            />
            <button type="submit">Sign-In</button>
        </form>
    )
}

export default LoginForm
