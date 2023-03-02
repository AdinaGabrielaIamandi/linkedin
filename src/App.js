import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileMain } from "./components/Profile-Main/ProfileMain";
import { NavbarTop } from "./components/NavbarTop/NavbarTop";
import { Homepage } from "./components/Home-page/Homepage";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/profile/:id" element={<ProfileMain />} />
        <Route path="/home/:id" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
