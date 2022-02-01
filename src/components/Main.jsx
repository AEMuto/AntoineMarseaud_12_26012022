import styled from 'styled-components'

const MainContainer = styled.div`
  margin-top: 90px;
  margin-left: 120px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4rem 5rem;
`

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>
}

export default Main
