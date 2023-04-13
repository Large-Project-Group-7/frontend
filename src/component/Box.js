import styles from '../styles/Box.module.css';
import '../styles/global.css';

export default function Box() {
    return (
        <div className={styles.stuff}>
            <h2 className={styles.Sign}>
                Sign Up
            </h2>
            {/*The Sign up form have 3 fiels, Username, Email and Password*/}
            <div>
                <form className={styles.form}>
                    <input name="username" 
                        placeholder='Username'/>
                    <br />
                    <input type="email" name="email" 
                        placeholder='Email Address'/>
                    <br />
                    <input id='password' type="password" name="password" 
                        placeholder='Password'/>
                    <br/>
                    <button type="submit">Continue</button>
                </form>
                <h3 id='text'>Already have an account?</h3>
                <a>Login</a>
            </div>
            <style jsx = "true"> {`
              input::placeholder {
                font-weight: bold;
                text-align: center;
                font-size: 18px;
              }
              input {
                background: linear-gradient(0deg, rgba(203, 119, 119, 0.2), 
                            rgba(203, 119, 119, 0.2)), 
                            #FFFFFF;
                border-radius: 5px;
                border: 1px solid #051135;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin-bottom: 40px;
                width: 50%;
                height: 50px;
                font-size: 18px;
              }

              button {
                background: #FFE0E0;
                border: 1px solid #000000;
                border-radius: 10px;
                width: 20%;
                min-width: 100px;
                height: 50px;
                font-size: 18px;
                margin-bottom: 40px;
              }
              
              #password {
                margin-bottom: 12px;
              }

              #text {
                text-align: center;
                font-size: 18px;
              }

              a {
                font-size: 18px;
                margin-left: 48%;
              }
            `}</style>
        </div>
        
    )
}