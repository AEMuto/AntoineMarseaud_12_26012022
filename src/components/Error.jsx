import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Error({ error }) {
  return (
    <Container>
      <h1>Oups ! Il y a eu une erreur...</h1>
      <code>Message : '{error ? error : 'Erreur de type inconnue'}'</code>
      <Link to="/">Retourner à la page d'accueil</Link>
    </Container>
  )
}

export default Error

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
  }
  code {
    margin: 2rem;
    padding: 1rem;
    background-color: lightgrey;
    font-size: 1.5rem;
  }
  a,
  a:visited {
    color: dodgerblue;
    font-size: 1.5rem;
  }
  a:hover {
    text-decoration: underline;
  }
`
