import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <div className="bodyImage"></div>
        <div className="auth-form-container">
            <div class = "headingLabel">Login</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@domain.com" id="email" name ="email"/>
                <label htmlFor="password">Password</label>
                <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password"  id="password" name ="password"/>
                <button type="submit"> Log In TEST</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account?</button>
        </div>
        </>
    );
}