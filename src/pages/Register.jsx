import React, { useState } from "react";

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
            <div class = "headingLabel">Register</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input value ={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" id="firstName" name ="firstName"/>
                <label htmlFor="lastName">Last Name</label>
                <input value ={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" id="lastName" name ="lastName"/>
                <label htmlFor="email">Email</label>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@domain.com" id="email" name ="email"/>
                <label htmlFor="password">Password</label>
                <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password"  id="password" name ="password"/>
                <button type="submit"> Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </div>
        </>
    );
}