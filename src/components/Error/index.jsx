import styled from "styled-components"

const Container = styled.div`
    margin: 2em 2em;
text-align: center;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
gap: .5em;

h2{
    margin: 0 auto;
    font-size: 12em;
    color: red;
}
p{
    width: 100%;
    margin: 0 auto;
    height: 2em;
    font-size: 2em;
}
`

const Error404 = () => {
    return (<Container >
        <h2 >404</h2>
        <p >Página no encontrada</p>
    </Container>)
}
export default Error404