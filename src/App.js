import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./components/Main"
import Header from "./components/Header"
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:black;
  }
`;

export default function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>    
    <Main/>
    </>
  )
}

