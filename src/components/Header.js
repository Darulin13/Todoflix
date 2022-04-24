import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todos from "./pages/Todos"
import Main from "./Main"
import ReactStars from "react-rating-stars-component";


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
        cursor:pointer;
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
        color:white;
        padding-bottom:5px;
        
    }
    img{
        cursor:pointer;
    }

`
const Title = styled.h1`
    color:white;
    font-size:15px;
    font-weight:600;
    cursor:pointer;

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
    ::-webkit-input-placeholder  { color:white; }
`
const Button = styled.button`
    color:white;
    background-color:red;
    border:none;
    border-radius:4px;
    width:20%;
   cursor:pointer;
`
const Perfil = styled.details`
    width:10%;
    cursor:pointer;
   
    color:white;
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
   
 
    img{
        width:50%;
    }
`
const Logo = styled.img`
border:none;
`
const Pesquisa = styled.section`  
    display:flex;
    align-self:end;
    flex-direction:row;
    justify-content:end;
    width:100%;
    article{
         width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;
        background-color:black;        
     }
    div{ 
        width:30%;
        background-color:white; 
        display:flex;
        align-items:start;
        flex-direction:column;
        position:absolute;
        z-index: 1;
        overflow-y:scroll;  
    }
    span{
        width:36.4%; 
        display:flex;
        align-items:start;
        flex-direction:column;
    }
    p{
        background-color:black; 
        color:white;
        width:100%;
        padding-bottom:20px;

    }
    h3{
        background-color:black; 
        color:white;
        width:100%; 
        padding-bottom:10px;
    }
    img{
        width:100%; 
        padding-bottom:10px;
  
    }
`
const Form = styled.form`
    border:solid red 2px;
    position:absolute;
    z-index:1;
    top:30vh;
    width:60%;
    align-self:center;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding-top:20px;
   
    article{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        padding-top:40px;
        padding-bottom:40px;
    }
    h3{

        padding-left:55px;
        padding-top:20px;
        font-size:25px;
        font-weight:300;
    }
    
    

    
`
const Center = styled.section`
    display:flex;
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    color:white;
`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    width:40%;
    border-radius:8px;
    font-weight:400;
    label{
        color:white;
        padding-bottom:10px;
        padding-top:10px; 
    }
   
    `
const Name = styled.input`
    background-color:gray;
    color:white;
    border:none;
    width:100%;
    padding-bottom:15px;
    border-radius:5px;
`
const Description = styled.input`
    background-color:gray;
    color:white;
    border:none;
    width:100%;
    padding-bottom:30px;
    border-radius:5px;
    `

const Select = styled.select`
    background-color:gray;
    color:white;
    border:none;
    width:100%;
    padding-bottom:15px;
    border-radius:5px;

`
const Image = styled.div`
    border:solid blue;
    width:40%;
`
const linkStyle = {
    textDecoration: "none",

};
const Close = styled.button`
    color:white;
    display:flex;
    width:5%;
    position:absolute;
    right:0px;
    top:5px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:15px;
    border:none;
    cursor:pointer;

    `
const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:center;
    padding-top:20px;
    padding-bottom:10px;
    
    `
const Cancelar = styled.button`
    color:white;
    border:none;
    border-radius:4px;
    width:20%;
    cursor:pointer; 
    padding-top:10px;
    padding-bottom:10px;

`
const Confirmar = styled.button`
    color:white;
    background-color:red;
    border:none;
    border-radius:4px;
    width:20%;
    cursor:pointer; 
    padding-top:10px;
    padding-bottom:10px;

`
const Novos = styled.section`
    color:white;
    p{
        color:white;
    }
`



export default class Header extends React.Component {
    state = {
        Films: [
            {
                title: "Shrek",
                paragraph: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
                img: "https://media.graphassets.com/rHzKc7MuSFG3Keyg6IuC"
            },
            {
                title: "Hoje Eu Quero Voltar…",
                paragraph: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
                img: "https://media.graphassets.com/CledITDQTHuBi09B5JkX",
                id: 1,
            },
            {
                title: "Spider-man",
                paragraph: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
                img: "https://media.graphassets.com/64MCO9fRSjCixvgvCRfF",
                id: 2,
            },
            {
                title: "Um Sonho de Liberdade",
                paragraph: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
                img: "https://media.graphassets.com/VCnc4vHRSdadYf62uEOS",
                id: 3,
            },
            {
                title: "Que Horas Ela Volta?",
                paragraph: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
                img: "https://media.graphassets.com/ugXGyzFUSgFmWJ6LJl2H",
                id: 4,
            },
        ],
        listFilms: [],
        open: false,
        newFilm: "",
        newDescription: "",
        listNewfilm: [],
    }
    //Filtro de pesquisa
    Search = (event) => {
        const { Films } = this.state;
        const filterFilms = Films.filter((item) => {
            if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true;
            }
        })
        console.log(event.target.value);
        this.setState({
            listFilms: filterFilms
        })
    }
    // Modal do botão de adicionar
    Modal = () => {
        this.setState({
            open: !this.state.open
        })
    }
    // Recebendo valor do input
    handleName = (event) => {
        this.setState({
            newFilm: event.target.value,
        })
    }

    handleDescription = (event) => {
        this.setState({
            newDescription: event.target.value

        })
    }
    handleChange
    // Criando lista dos filmes novos
    Add = (event) => {
        this.setState({
            listNewfilm: this.state.listNewfilm.concat({
                newFilm: this.state.newFilm,
                newDescription: this.state.newDescription,
                id: Date.now(),
                open: false,
            })
        })
        event.preventDefault();

    }

    render() {
        return (
            <Router>
                <Container>
                    <LeftBar>
                        <Logo src="https://media.graphassets.com/ZpRI75tDTqKbyNuTbicA" alt="logo" />
                        <Title>Início</Title>
                        <details>
                            <summary>Categorias </summary>
                            <div>
                                <Link to="/Todos" style={linkStyle}  ><p>Todos</p></Link>
                                <Link to="/Favoritos" style={linkStyle}  >  <p>Favoritos</p></Link>
                                <Link to="/Vistos" style={linkStyle}  ><p>Já vistos</p></Link>
                                <Link to="/Adicionados" style={linkStyle}  > <p>Adicionados</p></Link>
                            </div>
                        </details>
                    </LeftBar>
                    <RightBar>
                        <Button onClick={this.Modal}> Adicionar filme

                        </Button>
                        <Input type="text" placeholder="   &#128269;   Pesquisar" onChange={this.Search} />
                        <Perfil>
                            <summary>
                                <img src="https://media.graphassets.com/S6bPJf2RqqOQKkeawGgg" alt="login" /> </summary>
                            <div>
dvsdvsdv
                            </div>
                        </Perfil>

                    </RightBar>
                </Container>

                {this.state.open && (
                    <Center>

                        <Form>
                            <Close>X</Close>
                            <h3>Adicionar Filme</h3>
                            <article>
                                <Text>

                                    <label>Nome</label>
                                    <Name required type="text" onChange={this.handleName} />
                                    <label>Descrição</label>
                                    <Description required type="text" onChange={this.handleDescription} />
                                    <label>Status</label>
                                    <Select required >
                                        <option>Já assiti</option>
                                        <option>Ainda não assiti</option>
                                    </Select>
                                    <label>Nota</label>
                                    <ReactStars
                                        count={5}
                                        char={"★"}
                                        size={50}
                                        color={"none"}
                                        activeColor={"#83BD75"}
                                        edit={true}
                                    />
                                </Text>
                                <Image>
                                </Image>
                            </article>
                            <Buttons>
                                <Cancelar>Cancelar</Cancelar>
                                <Confirmar onClick={this.Add}>Confirmar</Confirmar>
                            </Buttons>

                        </Form>
                    </Center>
                )}

                <Pesquisa>
                    <span>
                        <div>
                            {this.state.listFilms.map((item) => (
                                <article>
                                    <img src={item.img} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p>{item.paragraph}</p>
                                </article>

                            ))}
                        </div>
                    </span>
                </Pesquisa>

                <Main />
                <Novos>
                    {this.state.listNewfilm.map((item) => (
                        <>
                            <p>{item.newFilm}
                            </p>
                            <p> {item.newDescription} </p>
                        </>

                    ))}
                </Novos>
                <Routes>
                    <Route path="/Todos" element={<Todos />} />
                </Routes>
            </Router>

        )
    }
}