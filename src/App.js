import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cadastro from "./pages/LoginSignup";
import Sobre from "./pages/Sobre";
import Maps from "./pages/Maps";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="maps" element={<Maps/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
