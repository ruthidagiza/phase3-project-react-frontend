import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login_page.js";
import Homepage from "./pages/homepage_page.js";
import SignupPage from "./pages/signup_page.js";
import PostDetailsPage from "./pages/post_details_page.js";
import AddNewPostPage from "./pages/add_post_page.js";
function App() {
  return (
    <Router>
      <div className="flex flex-col w-full bg-gray-100 min-h-screen ">
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="/article_details" exact element={<PostDetailsPage />} />
          <Route path="/add_new_post" exact element={<AddNewPostPage />} />
          <Route path="/my_articles" exact element={<AddNewPostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
