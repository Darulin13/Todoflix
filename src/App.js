import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Adicionados from "./components/pages/Adicionados"
import Favoritos from "./components/pages/Favoritos"
import Visto from "./components/pages/Visto"
import Todos from "./components/pages/Todos"
import Destaques from "./components/pages/Destaques"
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:black;
  }
`;

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Destaques />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/Adicionados" element={<Adicionados />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Visto" element={<Visto/>} />
      </Routes>



    </Router>
  )
}

