import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileMain } from "./components/Profile-Main/ProfileMain";
import { NavbarTop } from "./components/NavbarTop/NavbarTop";
import { Homepage } from "./components/Home-page/Homepage";
import { WorkSection } from "./components/WorkSection/WorkSection";
import { UserProfile } from "./components/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/profile/me" element={<ProfileMain />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/home/me" element={<Homepage />} />
        <Route path="/work" element={<WorkSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
