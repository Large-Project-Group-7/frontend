import React, { useState } from "react";
import { SignUpBox } from './component/SignUpBox';
import { LoginBox } from './component/LoginBox';
import { Home } from './pages/Home';
import { Search } from './pages/SearchPage';

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
          case "search":
            console.log("Switching to: " + currentForm);
            return <Search onFormSwitch={toggleForm}/>
          default:
            console.log("Defaulted");
            return <LoginBox onFormSwitch={toggleForm}/>
        }
      })()}
    </div>
  );
}

export default App;
