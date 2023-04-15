import React, { useState } from "react";
//import './App.css';
import { SignUpBox } from './component/SignUpBox';
import { LoginBox } from './component/LoginBox';
import { Home } from './component/Home';

function App() {
  const [currentForm,setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {(() => {
        switch (currentForm) {
          case "login":
            console.log("Switching to: " + currentForm);
            return <LoginBox onFormSwitch={toggleForm}/>
          case "register":
            console.log("Switching to: " + currentForm);
            return <SignUpBox onFormSwitch={toggleForm}/>
          case "home":
            console.log("Switching to: " + currentForm);
            return <Home onFormSwitch={toggleForm}/>
          default:
            console.log("Defaulted");
            return <LoginBox onFormSwitch={toggleForm}/>
        }
      })()}
    </div>
  );
}

export default App;
