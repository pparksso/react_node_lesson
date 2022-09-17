import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBar from "./components/views/NavBar/NavBar";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  // const AuthLandingPage = Auth({ LandingPage }, null);
  // const AuthLoginPage = Auth({ LoginPage }, false);
  // const AuthRegisterPage = Auth({ RegisterPage }, false);

  return (
    <BrowserRouter>
      <Auth />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
