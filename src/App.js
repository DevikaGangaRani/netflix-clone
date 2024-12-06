import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import React from "react";
import HomeBanner from "./components/HomeBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeBanner />} />
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
