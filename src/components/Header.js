import React from "react";
import styled from "styled-components";

const Container = styled.header`
    height:10vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border:solid red;
    align-items:center;
`

const LeftBar = styled.section`
    width:25%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;

    summary::-webkit-details.market{

    }
    summary{
        color:white;
    }
    div{
        diplay:flex;
        flex-direction:column;
        justify-content:space-evenly;
        border:solid white;
        height:30vh;
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
    state = {

    }
    render() {
        return (
            <Container>
                <LeftBar>
                    <img src="" alt="logo" />
                    <Title>Início</Title>
                    <details>
                        <summary>Categorias</summary>
                        <div>
                                                   <p>Todos</p>
                        <p>Favoritos</p>
                        <p>Já vistos</p>
                        <p>Adicionados</p> 
                        </div>

                    </details>
                </LeftBar>
                <RightBar>
                    <Button> Adicionar filme</Button>
                    <Input placeholder="Pesquisar"/>
                    <Perfil src="" alt="logo" />
                </RightBar>

            </Container>
        )
    }
}