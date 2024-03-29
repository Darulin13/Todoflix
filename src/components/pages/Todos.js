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

const Novos = styled.section`
    color:white;
    p{
        color:white;
    }
`
const Input = styled.input`  
    background-color:gray;
    position:relative;
        
    top:10px;
    z-index:1;
    color:white;
    border:none;
    width:99%;
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
export default class Todos extends React.Component {
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
        Todos: [],
        listFilms: [],
        open: false,
        favorito: false,
        favoriteFilms: [],
        listFilterFilms: [],
        listNewFilms: [],
    }

    async componentDidMount() {
        var newFilms = localStorage.getItem("listNewfilmToTodos")
        const list = JSON.parse(newFilms)
        this.setState({
            listNewFilms: list,
            Todos: this.state.Todos.concat([...this.state.Films, ...this.state.listNewFilms])
        })
    }

    //Array.prototype.filter() expects a value to be returned at the end of arrow function 

    /* Search = (event)  => {
       if (event.target.value !== 0) {
           const { Films } = this.state;
           const filterFilms = Films.filter((item) => {
               if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                   return true;
               }
           })
           this.setState({
               Todos: filterFilms,
   
           })
       } 
   }*/



    render() {
        return (
            <Container>
                <Input type="text" placeholder="   &#128269;   Pesquisar" onChange={this.Search} />
                <Title>Todos</Title>
                <Box>


                    {this.state.Todos.map((item) => (
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

                <Novos>
                    {this.state.listNewFilms.map((item) => (
                        <>
                            <p>{item.title}
                            </p>
                            <p> {item.paragraph} </p>
                        </>

                    ))}
                </Novos>



            </Container>



        )
    }
}