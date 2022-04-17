import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todos from "./pages/Todos"
import Main from "./Main"

const Container = styled.header`
    height:10vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const LeftBar = styled.section`
    width:25%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;

    summary{
        color:white;
       
    }
    details{
 
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
    }
    div{
        color:white;
        position: absolute;
        z-index: 1;
      
    }
    p{
        color:white
    }
    img{
        border:solid blue;

    }

`
const Title = styled.h1`
    color:white;
`

const RightBar = styled.section`
    width:50%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    height:60%;

`
const Input = styled.input`
    
    background-color:gray;
    color:white;
    border:none;
    width:60%;
`

const Button = styled.button`
    color:white;
    background-color:red;
    border:none;
    border-radius:4px;
    width:20%;

`
const Perfil = styled.img`
    width:5%;
    border:solid blue;


`


export default class Header extends React.Component {

    render() {
        return (
            <Router>
                <Container>
                    <LeftBar>
                        <img src="" alt="logo" />
                        <Title>Início</Title>
                        <details>
                            <summary>Categorias</summary>
                            <div>
                                <Link to="/Todos" ><p>Todos</p></Link>
                                <Link to="/Favoritos" >  <p>Favoritos</p></Link>
                                <Link to="/Vistos" ><p>Já vistos</p></Link>
                                <Link to="/Adicionados" > <p>Adicionados</p></Link>
                            </div>
                        </details>
                    </LeftBar>
                    <RightBar>
                        <Button> Adicionar filme</Button>
                        <Input placeholder="Pesquisar" />
                        <Perfil src="" alt="logo" />
                    </RightBar>
                </Container>
                <Main />
                <Routes>
                    <Route path="/Todos" element={<Todos />} />
                </Routes>
            </Router>

        )
    }
}