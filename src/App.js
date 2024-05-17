// import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VFXPage from "./Pages/VFXPage/VFXPage";
import ColorZenPage from "./Pages/ColorZenPage/ColorZenPage";
// import { useCallback, useEffect, useState } from "react";
// import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vfx" element={<VFXPage />} />
        <Route path="/colorzen" element={<ColorZenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
