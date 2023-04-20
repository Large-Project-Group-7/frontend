import style from '../styles/Box.module.css';
import { useState } from "react";
import $ from "jquery";
import '../styles/global.css';

export const LoginBox = (props) => {

    const [setUsername] = useState("");
    const [setPassword] = useState("");
    const [setResult] = useState("");
  
    const handleChange = (e) => {
      if(e.target.id === 'username')
      {
        setUsername(e.target.value);
      }
      else if(e.target.id === 'password')
      {
        setPassword(e.target.value);
      }
      else
      {
        console.log("Defaulted box: " + e.target.id + " of: " + e.target.value);
      }
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
                console.log("Succesful submit of: " + data);
                props.onFormSwitch('home')
            },
        });
    };

  return (
    <div className={style.stuff}>
      {/*The Login form has 2 fields, Username/Email and Password*/}
      <div>
        <form
          className={style.form}
          action="http://localhost:8000/test.php"
          method="post"
          onSubmit={(event) => handleSumbit(event)}
        >
          <h2 className={style.Sign}> {/*Moved inside div so it can be centered w. the form itself*/}
            Login
          </h2>
          <input id='username' name="username"
            onChange={(event) => handleChange(event)} 
            placeholder='Username / Email' 
            />
          <br />
          <input id='password' type="password" name="password"
            onChange={(event) => handleChange(event)}
            placeholder='Password' />
          <br />
          <button className={style.submit} type="submit">Submit</button> {/* onClick={() => props.onFormSwitch('home')}*/}
          <h3 id={style.text}>Don't have an account?</h3>
          <button className={style['link-btn']} onClick={() => props.onFormSwitch('register')}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}