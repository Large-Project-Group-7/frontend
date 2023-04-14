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
          <button className="submit" type="submit">Continue</button>
          <h3 id='text'>Already have an account?</h3>
          <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login</button>
        </form>

      </div>
      <style jsx="true"> {`
              input::placeholder {
                font-weight: 5px;
                text-align: center;
                font-size: 32px
              }
              input {
                background: linear-gradient(0deg, rgba(203, 119, 119, 0.2), 
                            rgba(203, 119, 119, 0.2)), 
                            #FFFFFF;
                border-radius: 5px;
                border: 1px solid #051135;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin-bottom: 40px;
                width: 80%;
                height: 80px;
                font-size: 18px;
              }

              .submit {
                background: #FFE0E0;
                border: 1px solid #000000;
                border-radius: 10px;
                width: 210px;
                min-width: 100px;
                height: 60px;
                font-size: 24px;
                /*margin-bottom: 40px;*/
              }
              
              #password {
                margin-bottom: 32px;
              }

              #text {
                text-align: center;
                font-size: 18px;
                margin-bottom: 10px;
              }

              .link-btn {
                margin-top: -25px;
                margin-bottom: calc(25px + 25px);
                border: none;
                background: none;
                color:blue;
                font-size: 21px;
                text-decoration: underline;
              }
            `}</style>
    </div>

  )
}