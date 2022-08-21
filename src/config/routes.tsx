import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/Login";
import SignupPage from "../pages/signup/Signup";
import GamePage from "../pages/game/GamePage";
import CreateOrJoinPage from "../pages/createOrJoin/CreateOrJoin";

export default function PageRoute() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/game" element={<GamePage />} />

      <Route
        path="*"
        //  element= { <p> No Link to this page yet </p>}
        element={<a href="/home"> No Link to this page yet </a>}
      />
    </Routes>
  );
}
