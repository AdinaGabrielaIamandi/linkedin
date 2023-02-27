import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileMain } from "./components/Profile-Main/ProfileMain";
import { NavbarTop } from "./components/NavbarTop/NavbarTop";
/* import { OtherCompanies } from "./components/Other-Companies/OtherCompanies"; */

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<ProfileMain />} /> {/* profileMain */}
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
