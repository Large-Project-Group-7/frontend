import style from '../styles/Box.module.css';
import '../styles/global.css';

export const LoginBox = (props) => {
  return (
    <div className={style.stuff}>
      {/*The Login form has 2 fields, Username/Email and Password*/}
      <div>
        <form className={style.form}>
          <h2 className={style.Sign}> {/*Moved inside div so it can be centered w. the form itself*/}
            Login
          </h2>
          <input name="username"
            placeholder='Username / Email' />
          <br />
          <input id='password' type="password" name="password"
            placeholder='Password' />
          <br />
          <button className={style.submit} type="submit" onClick={() => props.onFormSwitch('home')}>Continue</button> {/*will need to run login verification*/}
          <h3 id={style.text}>Don't have an account?</h3>
          <button className={style['link-btn']} onClick={() => props.onFormSwitch('register')}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}