import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Router>
        <div>
          <nav className="header">
            <ul className="horizontal-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Header;
