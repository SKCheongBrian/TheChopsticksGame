import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import PageRoute from "./config/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <PageRoute />
      </Router>
    </div>
  );
}

export default App;
