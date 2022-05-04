import React from "react";
import styled from "styled-components";


const Container = styled.main`
    height:60vh;
    width:70%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;

    align-items:center;


`
const Text = styled.div`
    color:white;
    width:45%;
    display:flex;
    flex-direction:column;
    justify-content:top;
    
 
    p{
        font-size:15px;
        padding-top:10px; 
        padding-bottom:10px; 
    
    }
    h2{
        font-size:40px;
        padding-bottom:10px; 
    }
    img{
   
        width:5%;
        cursor:pointer;

    }
`
const Film = styled.article`
    width:95%;
 
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    
`
const Banner = styled.section`
    width:50%;

    img{
        width:100%;
    }

`

export default class Main extends React.Component {
    state = {
        favorito: false,
        Film: [
            {

                title: "Capitão Fantástico",
                paragraph: "Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
                img: "https://media.graphassets.com/CEHvNDY1SBKkmEbYpTOl"
            },
        ],
        

    }

    handleFavorite = () => {
        if (this.state.favorito == false) {
            this.setState({
                favorito: true
            })
            localStorage.setItem("filmFavorite",JSON.stringify(this.state.Film));
        }if (this.state.favorito == true) {
            localStorage.removeItem("filmFavorite")
            this.setState({
                favorito: false
            })
           
        }


    }
    render() {
        return (
            <Container>
                <Film>
                    {
                        this.state.Film.map((item) => (
                            <Banner>
                                <img src={item.img} alt="Capitão" />
                            </Banner>
                        ))
                    }
                    {
                        this.state.Film.map((item) => (
                            <Text>
                                <img src="https://media.graphassets.com/HC8tbc7QSoetdCCmR9qC" alt="heart" onClick={this.handleFavorite} style={this.state.favorito == true ? { filter: "brightness(1.5)" } : { filter: "brightness(0.5)" }} />
                                <p>Visto recentemente</p>
                                <h2>{item.title}</h2>
                                <p>{item.paragraph}</p>
                                <img src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like" />
                            </Text>
                        ))
                    }

                </Film>

            </Container>
        )
    }


}