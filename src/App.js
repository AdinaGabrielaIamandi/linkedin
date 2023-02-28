import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileMain } from "./components/Profile-Main/ProfileMain";
import { NavbarTop } from "./components/NavbarTop/NavbarTop";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<ProfileMain />} />
        <Route path="/:dynamicId" element={<ProfileMain />} />

        <Route path="/me" element={<ProfileMain />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
