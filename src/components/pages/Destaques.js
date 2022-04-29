import React from "react";
import styled from "styled-components";
import Carousel from 'nuka-carousel'
import Main from "../Main"
import ReactStars from "react-rating-stars-component";

const Container = styled.main`
    color:white;
    display:flex;
    flex-diretion:column;
    justify-content:center;
    align-items:center;
    h1{
        padding-left:5px;
        font-size:20px;
    }
    nav{
         width:97%; 
    }
`
const carouselConfig = {
    slidesToShow: 5,
    autoplay: true,
    wrapAround: true,
    renderBottomCenterControls: false,
    adaptiveHeight: true,
    cellSpacing: "15",
    style: {
        width: "100%",
        height: "100%"
    }
}
const Poster = styled.img`
    width:100%;
    cursor:pointer;
`
const Box = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    color:white;
    padding-top:2vh;
    padding-bottom:2vh;
    p{
        font-size:10px;
        padding-top:1vh;
    }
    h2{
        font-size:15px;
        padding-top:1vh;
    
    }
    div{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    span{
        width:15%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
`
const Card = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    color:white;
    padding:5vh;
    position:absolute;
    z-index: 1;
    bottom:5px;
    border:solid white 1px;
    border-radius:8px;
    p{
        font-size:20px;
        padding-top:1vh;   
          padding-bottom:2vh;
          font-weight:400;
    }
    h2{
        font-size:25px;
        font-weight:500;
        padding-top:3vh;
    }

`
const CardChild = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:40%;
    padding-top:14px;
    align-items:center;`

const Icon = styled.img`
    width:0.5%;
    position:absolute;
    bottom:205px;
    background-color:transparent;
  `
const Button = styled.button`
     width:65%;
     padding-top:1px;
     padding-bottom:1px;
     border:none;
     background-color:gray;
     color:white;
     border-radius:4px;
     font-size:17px;
     font-weight:500;
     cursor:pointer
`
const IconHeart = styled.img`
    width:12%;
    cursor:pointer;
    background-color:transparent;
    
  `
const CloseButton = styled.button`
    width:10%;
    cursor:pointer;
    color:white;
    position:absolute;
    right:0px;
    top:0.5px;
    font-size:15px;
    border:none;
    padding:0;
    
  `
const Fav = styled.p`color:white;`


export default class Destaques extends React.Component {
    state = {
        Films: [
            {
                id: 0,
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
        favorito: false,
        like: "-",
        favoriteFilms: [],
    }
    //Abrindo card  
    OpenCard = (id) => {
        const films = this.state.Films.filter((item) => item === id)
        this.setState({
            listFilms: this.state.listFilms.concat(films),
        })

    }
    //Fechando card
    Close = (id) => {
        this.setState({
            listFilms: this.state.listFilms.filter((item) => {
                return item.id !== id;
            })
        })
    }


    //Favorito
    handleFavorite = (id) => {
        const Films = this.state.Films.filter((item) => item === id)
        this.setState({
            favoriteFilms: this.state.favoriteFilms.concat(Films)
        })
        console.log("favoritos", this.state.favoriteFilms)
         localStorage.setItem("favoriteFilms",this.state.favoriteFilms); 

        this.setState({
            favorito: !this.state.favorito
        })

    }

    render() {
        return (
            <>

                <Main />
                <Container>
                    {this.state.listFilms.map((item) => (
                        <Card>
                            <CloseButton onClick={() => { this.Close(item.id) }}>X</CloseButton>
                            <Poster src={item.img} alt={item.title} />
                            <CardChild>
                                <Button>Já Assisti</Button>
                                <IconHeart src="https://media.graphassets.com/HC8tbc7QSoetdCCmR9qC" alt="heart" onClick={this.handleFavorite} style={this.state.favorito === true ? { filter: "brightness(1.5)" } : { filter: "brightness(0.5)" }} />
                                <IconHeart src="https://media.graphassets.com/Ol4EIyBqSuLXDlcQikyQ" alt="More innformation" />
                            </CardChild>
                            <h2>{item.title}</h2>
                            <p>{item.paragraph}</p>
                            <ReactStars
                                count={5}
                                char={"★"}
                                size={50}
                                color={"none"}
                                activeColor={"#83BD75"}
                                edit={true}
                            />
                        </Card>
                    ))}
                    <nav>
                        <h1>Destaques</h1>
                        <Carousel
                            {...carouselConfig}
                            defaultControlsConfig={{
                                nextButtonText: ' >',
                                prevButtonText: ' <',
                                pagingDotsStyle: {
                                    fill: 'none',
                                },
                            }}>
                            {this.state.Films.map((item) => (
                                <Box >
                                    <Icon src="https://media.graphassets.com/HC8tbc7QSoetdCCmR9qC" alt="heart" onClick={() => this.handleFavorite(item)} style={this.state.favorito === true ? { filter: "brightness(1.5)" } : { filter: "brightness(0.5)" }} />
                                    <Poster src={item.img} alt={item.title} onClick={() => this.OpenCard(item)} />
                                    <div>
                                        <h2>{item.title}</h2>
                                        <span>
                                            <p>-</p>
                                            <img src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like" />
                                        </span>
                                    </div>
                                    <p>{item.paragraph}</p>
                                </Box>
                            ))}
                        </Carousel>
                    </nav>
                </Container>
                {this.state.favoriteFilms.map((item)=>(
                    <Fav>
                    {item.title}</Fav>
                ))}
            </>
        )
    }
}