// import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VFXPage from "./Pages/VFXPage/VFXPage";
import ColorZenPage from "./Pages/ColorZenPage/ColorZenPage";
import MenuPage from "./Pages/MenuPage/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu-page" element={<MenuPage />} />
        <Route path="/demo-reel" element={<VFXPage />} />
        <Route path="/colorzen" element={<ColorZenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
