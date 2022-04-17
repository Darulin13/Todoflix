import React from "react";
import styled from "styled-components";
import Carousel from 'nuka-carousel';


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
           width:95%; 
    }
    
`
const carouselConfig = {
    slidesToShow: 5,
    autoplay: true,
    wrapAround:true,
    renderBottomCenterControls: false,
    adaptiveHeight: true,
    cellSpacing:"15",
    style:{
        width:"100%",
    
        height:"100%"
      
      
    }
        
    



}
const Poster = styled.img`
    width:100%;
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

`

export default class Todos extends React.Component {
    state = {
        Films: [
            {
                title: "Shrek",
                paragraph: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
                img: "https://img.elo7.com.br/product/zoom/1C2534B/painel-1-50x1-shrek-lona.jpg"
            },
            {
                title: "Hoje Eu Quero Voltar…",
                paragraph: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
                img: "https://img.elo7.com.br/product/zoom/1C2534B/painel-1-50x1-shrek-lona.jpg"
            },
            {
                title: "Spider-man",
                paragraph: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
                img: "https://img.elo7.com.br/product/zoom/1C2534B/painel-1-50x1-shrek-lona.jpg"
            },
            {
                title: "Um Sonho de Liberdade",
                paragraph: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
                img: "https://img.elo7.com.br/product/zoom/1C2534B/painel-1-50x1-shrek-lona.jpg"
            },
            {
                title: "Que Horas Ela Volta?",
                paragraph: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
                img: "https://img.elo7.com.br/product/zoom/1C2534B/painel-1-50x1-shrek-lona.jpg"
            },
        ]

    }
    render() {
        return (
            <Container>    
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
                    <Box>
                        <Poster src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.paragraph}</p>
                    </Box>
                ))}
            </Carousel>
        </nav>
            </Container>



        )
    }
}