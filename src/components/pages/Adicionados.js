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

    @media(max-width:1249px){
        width:100%;
      
        
    }
    


`
const Title = styled.h1`
    padding-top:25px;  
    padding-bottom:5px;  
    font-weight:400;
`
const Box = styled.section`
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr  1fr 1fr;
    row-gap: 50px;

    @media(max-width:919px){
         display:grid;
        grid-template-columns: 1fr 1fr   1fr;
    }
    @media(max-width:698px){
        display:grid;
       grid-template-columns:  1fr   1fr;
   }
   
   @media(max-width:428px){
    display:grid;
   grid-template-columns:    1fr;
}

    

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


const Input = styled.input`  
    background-color:#585858;
    position:relative;
    bottom:72px;
    left:819px;
    z-index:1;
    color:white;
    border:none;
    width:37%;
    padding-top:10px;
    padding-bottom:10px;
    ::-webkit-input-placeholder  { color:white; }

    @media(max-width:924px){
        position:relative;
        
        top:10px;
   }

    
    @media(max-width:919px){
        position:relative;
        width:80%;
        left:0px;
        bottom:10px;
       
   }
`
export default class Adicionados extends React.Component {
    state = {

        open: false,
        favorito: false,
        listNewfilms: [],
        filterFilms:[],
        
    }

    async componentDidMount() {
        var newFilms = localStorage.getItem("listNewfilm")
        const list = JSON.parse(newFilms)
        this.setState({
            listNewfilms: list
        })
        localStorage.setItem("listNewfilmToTodos", JSON.stringify(this.state.listNewfilms));
    }

    Search = (event)  => {
        if (event.target.value !== 0) {
            const { listNewfilms } = this.state;
            const filterFilms = listNewfilms.filter((item) => {
                if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                    return true;
                }
            })
            this.setState({
                listNewfilms: filterFilms,
    
            })
        } 
    }
    


    render() {
        return (
            <Container>
                 <Input type="text" placeholder="   &#128269;   Pesquisar" onChange={this.Search} />
                <Title>Adicionados Recentemente</Title>
                <Box>{this.state.listNewfilms.map((item) => (


                    <BoxChild>

                        <Poster src={item.img} alt={item.title}/>
                        <div>
                            <Name>{item.title}</Name>
                            <span>
                                <p>-</p>
                                <Icon src="https://media.graphassets.com/Vs3a1OBlRSC4P6R5xnjK" alt="like" />
                            </span>
                        </div>
                        <Paragraph> {item.paragraph}</Paragraph>
                    </BoxChild>
                ))}
                </Box>


            </Container>



        )
    }
}