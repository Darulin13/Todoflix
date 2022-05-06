import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";



const Container = styled.header`
    height:10vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    @media(max-width:856px){

        height:20vh;
        flex-direction:column;
        justify-content:space-between;
         
     }
   
`

const LeftBar = styled.section`
    width:25%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;

    

    summary{
        float: left;
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
        z-index: 2;

    }
    p{
        color:white;
        padding-bottom:5px;
        
    }
    img{
        cursor:pointer;
    }

    @media(max-width:919px){
        
        width:60%;
        align-self:start;
        flex-direction:row-reverse;
        justify-content:space-between;
        summary{
         
            display:none
        }

        summary::-webkit-details-marker {
        color: red;
        }
        @media(max-width: 425px){

            width:65%;
    }
`
const Title = styled.h1`
    color:white;
    font-size:15px;
    font-weight:600;
    cursor:pointer;
    @media(max-width:919px){
        display:none;
    }


`

const RightBar = styled.section`
    width:50%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    height:60%;

    @media(max-width:856px){
        width:100%;
        ;
         height:50%;
         flex-direction:row;
        justify-content:space-between;
         
     }

`
const Input = styled.input`
    
    background-color:#585858;
    color:white;
    border:none;
    width:60%;
    ::-webkit-input-placeholder  { color:white; }
    @media(max-width:919px){
       display:none;
   }
`
const Button = styled.button`
    color:white;
    background-color:red;
    border:none;
    border-radius:4px;
    width:20%;
   cursor:pointer;

   @media(max-width:856px){

    width:20%;
   
     
 }
`
const Perfil = styled.details`
    width:10%;
    cursor:pointer;
    color:white;
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
   
    @media(max-width:919px){
        width:10%;
    }
 
    img{
        width:50%;
    }
`
const Logo = styled.img`
border:none;
`

const Form = styled.form`
    border:solid white 1px;
    border-radius:8px;
    position:absolute;
    z-index:2;
    top:10vh;
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

        @media(max-width:665px){
            flex-direction:column;
          
        }
    }
    h3{

        padding-left:55px;
        padding-top:20px;
        font-size:25px;  

        @media(max-width:665px){
        align-self:center;
        display:flex;
        padding:0px;
        text-align:center;
          
        }
        

       
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
    width:45%;
    
    label{
        padding-bottom:10px;
        padding-top:10px;
    }
    
    @media(max-width:665px){
        width:95%;
        padding-left:10px;
    }
   
    `
const Name = styled.input`
    background-color:#585858;
    color:white;
    border:none;
    width:100%;
    padding-bottom:20px;
    border-radius:5px;

    
`
const Description = styled.input`
    background-color:#585858;
    color:white;
    border:none;
    width:100%;
    padding-bottom:60px;
    border-radius:5px;
    `

const Select = styled.label`
    background-color:black;
    color:white;
    border:none;
    width:100%;
    padding-bottom:15px;
    border-radius:5px;
`
const Escolha = styled.div`
    width:80%;

    display:flex;
    flex-direction:row;
    align-items:start;
    justify-content:space-between;
    background-color:black;
    option{
        background-color:black;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }


`


const Image = styled.div`
   
    width:38%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    

    @media(max-width:665px){
        width:95%;
        padding-left:10px;
    }
    
`
const InputImagem = styled.input`
    background-color:white;
      ::-webkit-input-placeholder  { color:black; }
    border:none;
    width:45%;
    padding-top:5px;
    padding-bottom:5px;
    border-radius:5px;
    font-size:15px;
    text-align:center;
`
const TitleImage = styled.p`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:start;
    font-size:20px;
    font-weight:600;
    padding-bottom:10px;
`

const Img = styled.img`
    padding-bottom:10px;
    width:100%
    border:1px solid white;
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

    @media(max-width:574px){
        width:95%;
        justify-content:space-evenly;
      
    }
    
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

    @media(max-width:574px){
       width:35%;
       
      
    }

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
        listFilterFilms: [],
        open: false,
        title: "",
        paragraph: "",
        img: "",
        listNewfilm: [],


    }




    // Modal do botão de adicionar
    Modal = () => {
        this.setState({
            open: !this.state.open
        })
    }
    // Modal do botão de Fechar
    Close = () => {
        this.setState({
            open: !this.state.open
        })
    }
    // Recebendo valor do input
    handleName = (event) => {

        this.setState({
            title: event.target.value,

        })

    }

    handleDescription = (event) => {

        this.setState({
            paragraph: event.target.value

        })

    }
    handleUrl = (event) => {
        this.setState({
            img: event.target.value

        })
    }

    // Criando lista dos filmes novos
    Add = (event) => {
        event.preventDefault();

        this.setState({
            listNewfilm: this.state.listNewfilm.concat({
                title: this.state.title,
                paragraph: this.state.paragraph,
                img: this.state.img,
                id: Date.now(),
            }),
            open: false,


        })

        localStorage.setItem("listNewfilm", JSON.stringify(this.state.listNewfilm));
    }

    render() {
        return (
            <>
                <Container>
                    <LeftBar>
                        <Link to="/"  > <Logo src="https://media.graphassets.com/ZpRI75tDTqKbyNuTbicA" alt="logo" /></Link>
                        <Link to="/" style={linkStyle} > <Title  >Início</Title></Link>
                        <details>
                            <summary>Categorias </summary>
                            <div>
                                <Link to="/Todos" style={linkStyle} >  <p>Todos</p></Link>
                                <Link to="/Favoritos" style={linkStyle}  >  <p>Favoritos</p></Link>
                                <Link to="/Visto" style={linkStyle}  ><p>Já vistos</p></Link>
                                <Link to="/Adicionados" style={linkStyle}  > <p>Adicionados</p></Link>
                            </div>
                        </details>
                    </LeftBar>
                    <RightBar>
                        <Button onClick={this.Modal}> Adicionar filme
                        </Button>
                        <Input type="text" placeholder="   &#128269;   Pesquisar" />
                        <Perfil>
                            <summary>
                                <img src="https://media.graphassets.com/S6bPJf2RqqOQKkeawGgg" alt="login" /> </summary>
                            <div>
                            </div>
                        </Perfil>
                    </RightBar>
                </Container>
                {this.state.open && (
                    <Center>
                        <Form>
                            <Close onClick={this.Close}>X</Close>
                            <h3>Adicionar Filme</h3>
                            <article>
                                <Text>

                                    <label>Nome</label>
                                    <Name required type="text" onChange={this.handleName} />
                                    <label>Descrição</label>
                                    <Description required type="text" onChange={this.handleDescription} />
                                    <label>Status</label>
                                    <Select type="submit" required >
                                        <Escolha>
                                            <img src="https://media.graphassets.com/dF8C1G2uRFWLrNId2JAF" />
                                            <option>Já assiti</option>
                                            <img src="https://media.graphassets.com/dF8C1G2uRFWLrNId2JAF" />
                                            <option>Ainda não assiti</option>
                                        </Escolha>
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
                                    <TitleImage>Imagem de capa</TitleImage>
                                    <Img src="https://media.graphassets.com/WxKtkt0DQjmMOUW08P6G" alt="imagem input" />
                                    <InputImagem type="text" placeholder="Selecionar URL" onChange={this.handleUrl} />
                                </Image>
                            </article>
                            <Buttons>
                                <Cancelar onClick={this.Close}>Cancelar</Cancelar>
                                <Confirmar onClick={this.Add}>Confirmar</Confirmar>
                            </Buttons>

                        </Form>
                    </Center>
                )}
            </>
        )
    }
}