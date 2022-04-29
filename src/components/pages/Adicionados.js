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
    padding-bottom:5px;  
    font-weight:400;
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
            
        listFilms: [],
        open: false,
        favorito:false,
        favoriteFilms:[],
    }

    componentDidMount() {
        this.setState({
            listFilms: localStorage.getItem("favoriteFilms")
        })
    }
    

    render() {
        return (
            <Container>
                
                <Title>Adicionados Recentemente</Title>
                <Box>
                    <BoxChild>
                   
                        <Poster />
                        <div>
                            <Name></Name>
                            <span>
                                <p>-</p>
                                <Icon src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like" />
                            </span>
                        </div>
                        <Paragraph></Paragraph>
                    </BoxChild>
            
                </Box>


            </Container>



        )
    }
}