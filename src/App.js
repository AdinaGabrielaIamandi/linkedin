import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileMain } from "./components/Profile-Main/ProfileMain";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* navbar */}
        <Routes>
          <Route path="/" element={<ProfileMain />} /> {/* profileMain */}
        </Routes>
        {/* footer */}
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
