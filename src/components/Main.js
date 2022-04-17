import React from "react";
import styled from "styled-components";


const Container = styled.main`
    height:50vh;
    width:70%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border:solid red;
    align-items:center;
    border:solid white;

`
const Text = styled.div`
    color:white;
    width:50%;
`
const Film = styled.article`
    width:95%;
    border:solid green;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    
`
const Banner = styled.section`
    width:40%;
    border:solid blue;
    img{
        width:50%;
    }

`

export default class Main extends React.Component {
    render() {
        return (
            <Container>
                <Film>
                    <Banner>
                        <img src="" alt="Capitão" />
                    </Banner>
                    <Text>
                        <p>Visto recentemente</p>
                        <h2>Capitão Fantástico</h2>
                        <p>Nas florestas do
                            estado de Washington,
                            um pai cria seus seis
                            filhos longe da civilização, em uma
                            rígida rotina de aventuras. Ele é
                            forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua
                            ideia do que significa ser pai.</p>
                    </Text>
                </Film>

            </Container>
        )
    }


}