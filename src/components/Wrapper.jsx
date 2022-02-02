import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin-top: 90px;
  margin-left: 120px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4rem 5rem;
`

function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper
