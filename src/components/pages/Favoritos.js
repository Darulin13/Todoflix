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
export default class Favoritos extends React.Component {
    state = {
        favoriteList: [],
        totalList: [],
    }

    async componentDidMount() {

        var List = localStorage.getItem("favoriteFilms")
        var fav = localStorage.getItem("filmFavorite");

        const listFilm = JSON.parse(List)
       const favFilm = JSON.parse(fav)
     //  if (favFilm !== null) {
           // this.setState({
          //     favoriteList: this.state.favoriteList.concat(listFilm).concat(favFilm),
//
           // })
      //  } else {
     this.setState({
  favoriteList: this.state.favoriteList.concat(listFilm)
       })
       //}
        console.log("teste", this.state.favoriteList)


    }



    render() {
        return (
            <Container>

                <Title>Favoritos</Title>
                <Box>{this.state.favoriteList.map((item) => (
                    <BoxChild>

                        <Poster src={item.img} alt={item.title} />
                        <div>
                            <Name>{item.title}</Name>
                            <span>
                                <p>-</p>
                                <Icon src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like" />
                            </span>
                        </div>
                        <Paragraph>{item.paragraph}</Paragraph>
                    </BoxChild>
                ))}

                </Box>




            </Container>



        )
    }
}