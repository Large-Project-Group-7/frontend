import styles from '../styles/Box.module.css';
import '../styles/global.css';

export const LoginBox = (props) => {
  return (
    <div className={styles.stuff}>
      {/*The Login form has 2 fields, Username/Email and Password*/}
      <div>
        <form className={styles.form}>
          <h2 className={styles.Sign}> {/*Moved inside div so it can be centered w. the form itself*/}
            Login
          </h2>
          <input name="username"
            placeholder='Username / Email' />
          <br />
          <input id='password' type="password" name="password"
            placeholder='Password' />
          <br />
          <button className={styles.submit} type="submit">Continue</button>
          <h3 id={styles.text}>Don't have an account?</h3>
          <button className={styles['link-btn']} onClick={() => props.onFormSwitch('register')}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}