import React, { useState } from "react";
//import './App.css';
import { SignUpBox } from './component/SignUpBox';
import { LoginBox } from './component/LoginBox';

function App() {
  const [currentForm,setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <SignUpBox onFormSwitch={toggleForm}/> : <LoginBox onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
