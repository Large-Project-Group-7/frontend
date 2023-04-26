import styles from '../styles/Box.module.css';
import '../styles/global.css';
import { Link } from 'react-router-dom';

export const SignUpBox = (props) => {

  //This is for styling the Link, for some reason, it's not working if you put this in the css file
  const LinkStyle = {
    display: 'inline-block',
  }

  return (
    <div className={styles.background}>
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
            <Link style={LinkStyle} className={styles['link-btn']} to='/'>Login</Link>
          </form>

        </div>
      </div>
    </div>

  )
}