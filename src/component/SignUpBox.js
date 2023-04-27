import styles from '../styles/Box.module.css';
import '../styles/global.css';
import { Link } from 'react-router-dom';

export const SignUpBox = (props) => {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data["reviewCount"] = 0;
    data["admin"] = false;

    fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      // The headers is required for it to work
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if(response.status === 201) {
        form.reset(); //Basically clear the content of the input if register correctly
        return response.json();
      }
    })
  }

  return (
    <div className={styles.background}>
      <div className={styles.stuff}>

        {/*The Sign up form has 3 fields, Username, Email and Password*/}
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.Sign}>  {/*Moved inside div so it can be centered w. the form itself*/}
              Sign Up
            </h2>
            <input name="username"
              placeholder='Username' 
              required/>
            <br />
            <input type="email" name="email"
              placeholder='Email Address'
              required />
            <br />
            <input id='password' type="password" name="password"
              placeholder='Password' 
              required/>
            <br />
            <button className={styles.submit} type="submit">Continue</button> {/*will need to run login verification*/}
            <h3 id={styles.text}>Already have an account?</h3>
            <Link to='/'>
              <button className={styles['link-btn']} to='/'>Login</button>
            </Link>
          </form>

        </div>
      </div>
    </div>

  )
}