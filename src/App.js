import React, { useState } from "react";
import { SignUpBox } from './component/SignUpBox';
import { LoginBox } from './component/LoginBox';
import { Home } from './pages/Home';
import { SearchBook } from './pages/SearchPage';
import { SearchUser } from './pages/SearchPage';
import { AdminPanel } from './pages/AdminPanel';
import { AddReview } from './pages/AddReview';
import { BookPage } from './pages/BookPage';

function App() {
  const [currentForm,setCurrentForm] = useState('home');

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
          case "searchBook":
            console.log("Switching to: " + currentForm);
            return <SearchBook onFormSwitch={toggleForm}/>
          case "searchUser":
            console.log("Switching to: " + currentForm);
            return <SearchUser onFormSwitch={toggleForm}/>
          case "admin":
            console.log("Switching to: " + currentForm);
            return <AdminPanel onFormSwitch={toggleForm}/>
          case "AddReview":
            console.log("Switching to: " + currentForm);
            return <AddReview onFormSwitch={toggleForm}/>
          case "Book":
            console.log("Switching to: " + currentForm);
            return <BookPage onFormSwitch={toggleForm}/>
          default:
            console.log("Defaulted");
            return <LoginBox onFormSwitch={toggleForm}/>
        }
      })()}
    </div>
  );
}

export default App;
