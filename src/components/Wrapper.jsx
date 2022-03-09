import styled from 'styled-components'

/**
 * The App wrapper. Mainly a simple div we translate to the down-left.
 * The value of the translation is represented in the margin of the StyledWrapper.
 * It's calculated in function of the Nav component's size.
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 * @constructor
 */
function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper

const StyledWrapper = styled.div`
  margin-top: 90px;
  margin-left: 120px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  @media (max-width: 1279px) {
    padding: 1rem 2rem;
  }
`
