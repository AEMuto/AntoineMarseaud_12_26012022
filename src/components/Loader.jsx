import styled from 'styled-components'
import loader from '../assets/loader.svg'

/**
 * Render a loading spinner.
 * @returns {JSX.Element}
 * @constructor
 */
function Loader() {
  return (
    <Container>
      <img src={loader} alt="loading spinner" />
    </Container>
  )
}

export default Loader

const Container = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  img {
    width: 10rem;
  }
`
