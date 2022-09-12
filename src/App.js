import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Login() {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl">Login</h2>
    </div>
  );
}

function Home() {
  return <h2 className="text-3xl">Home</h2>;
}

export default App;
