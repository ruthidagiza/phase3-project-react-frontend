import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login_page.js";
import Homepage from "./pages/homepage_page.js";
import SignupPage from "./pages/signup_page.js";
import PostDetailsPage from "./pages/post_details_page.js";
import AddNewPostPage from "./pages/add_post_page.js";
import UpdateArticlePage from "./pages/update_article_page.js";
function App() {
  return (
    <Router>
      <div className="flex flex-col w-full bg-gray-100 min-h-screen ">
        <div className="flex w-full justify-between p-2 items-end">
          <div className="flex">
            {" "}
            <Link to="/">
              <div className="flex text-teal-700 cursor-pointer leading-5 font-black  text-3xl">
                Ruth Articles
              </div>
            </Link>
            {/* <div className="flex  px-2 mx-1 hover:text-teal-700 transition-all">
              <Link to="/">Home</Link>
            </div> */}
          </div>
          <div className="flex">
            {" "}
            <div className="flex  py-1 rounded-lg mx-1 hover:text-teal-700 border-[1px] border-teal-700 px-5 transition-all">
              <Link to="/add_new_post">Add New Article</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="/article_details" exact element={<PostDetailsPage />} />
          <Route path="/add_new_post" exact element={<AddNewPostPage />} />
          <Route path="/update_article" exact element={<UpdateArticlePage />} />
          {/* <Route path="/my_articles" exact element={<AddNewPostPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
