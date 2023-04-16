import styles from '../styles/Box.module.css';
import '../styles/global.css';

export const SignUpBox = (props) => {
  return (
    <div className={styles.stuff}>

      {/*The Sign up form has 3 fields, Username, Email and Password*/}
      <div>
        <form className={styles.form}>
          <h2 className={styles.Sign}>  {/*Moved inside div so it can be centered w. the form itself*/}
            Sign Up
          </h2>
          <input name="username"
            placeholder='Username' />
          <br />
          <input type="email" name="email"
            placeholder='Email Address' />
          <br />
          <input id='password' type="password" name="password"
            placeholder='Password' />
          <br />
          <button className={styles.submit} type="submit" onClick={() => props.onFormSwitch('home')}>Continue</button> {/*will need to run login verification*/}
          <h3 id={styles.text}>Already have an account?</h3>
          <button className={styles['link-btn']} onClick={() => props.onFormSwitch('login')}>Login</button>
        </form>

      </div>
    </div>

  )
}