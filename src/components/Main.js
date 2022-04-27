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

    }

    handleFavorite = () => {
        this.setState({
            favorito: !this.state.favorito
        })
    

    }
    render() {
        return (
            <Container>
                <Film>
                    <Banner>
                        <img src="https://media.graphassets.com/CEHvNDY1SBKkmEbYpTOl" alt="Capitão" />
                    </Banner>
                    <Text>
                        <img src="https://media.graphassets.com/HC8tbc7QSoetdCCmR9qC" alt="heart" onClick={this.handleFavorite} style={this.state.favorito === true ? { filter: "brightness(1.5)" } : { filter: "brightness(0.5)" }} />
                        <p>Visto recentemente</p>
                        <h2>Capitão Fantástico</h2>
                        <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
                        <img src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like"/>
                    </Text>
                </Film>

            </Container>
        )
    }


}