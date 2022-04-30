import React from "react"
import styled from "styled-components";

const Container = styled.main`
    width:83%;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:start;

    padding-left:25px;
    padding-top:25px; 
`
const Title = styled.h1`
    padding-bottom:10px;  
    font-weight:400;
    color:white;
`
const Box = styled.section`
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr  1fr 1fr;
    row-gap: 50px

`
const Poster = styled.img`
    width:95%;

`
const BoxChild = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    color:white;

    div{
        width:95%;
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
const Name = styled.h2`
    font-size:15px;
    width:80%;
    padding-top:05px;
    padding-bottom:05px;
`
const Paragraph = styled.p`
    font-size:10px;
    width:90%;
    font-weight:500;


`


const Icon = styled.img`
    
    width:45%;
`
export default class Adicionados extends React.Component {
    state = {

        open: false,
        favorito: false,
        listNewfilms: [],
    }

    async componentDidMount() {
        var newFilms = localStorage.getItem("listNewfilm")
        const list = JSON.parse(newFilms)
        this.setState({
            listNewfilms: this.state.listNewfilms.concat(list)
        })
    }


    render() {
        return (
            <Container>

                <Title>Adicionados Recentemente</Title>
                <Box>{this.state.listNewfilms.map((item) => (


                    <BoxChild>

                        <Poster src="https://media.graphassets.com/rHzKc7MuSFG3Keyg6IuC"/>
                        <div>
                            <Name>{item.newFilm}</Name>
                            <span>
                                <p>-</p>
                                <Icon src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like" />
                            </span>
                        </div>
                        <Paragraph> {item.newDescription}</Paragraph>
                    </BoxChild>
                ))}
                </Box>


            </Container>



        )
    }
}