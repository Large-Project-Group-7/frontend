import React, { useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUpBox } from './component/SignUpBox';
import { LoginBox } from './component/LoginBox';
import { AddReview } from './pages/AddReview';
import { AdminPanel } from './pages/AdminPanel';
import { BookPage } from './pages/BookPage';
import { SearchBook } from './pages/SearchPage';
import { SearchUser } from './pages/SearchPageUsers';
import { Home } from './pages/Home';
import { ReviewPage } from './pages/ReviewPage';
import { ProfilePage } from "./pages/ProfilePage";
import { Popup } from "./pages/Popup";



function App() {
  useEffect(() => {
    document.title = "Book Raiders";  
  }, []);

  return (
    // Implement router for redirecting pages
    <Router>
      <div className="App">
          {/*Just put the pages here and the path to the pages,
          to Link to it, just use Link from react-router-dom, look in LoginBox for how to do that. */}
          <Routes>
            <Route exact path='/' element={<LoginBox />} />;
            <Route exact path='/Signup' element={<SignUpBox />}/>;
            <Route exact path='/Home' element={<Home />} />;
            <Route exact path='/AddReview' element={<AddReview />} />;
            <Route exact path='/AdminPanel' element={<AdminPanel />} />;
            <Route exact path='/Book' element={<BookPage />} />
            <Route exact path='/Users' element={<SearchBook />} />;
            <Route exact path='/Review' element={<ReviewPage />} />;
            <Route excat path='/Profile' element={<ProfilePage />} />;
            <Route excat path='/Popup' element={<Popup />} />;
            <Route excat path='/SearchUser' element={<SearchUser />} />;
          </Routes>
      </div>
    </Router>
  );
}

export default App;
