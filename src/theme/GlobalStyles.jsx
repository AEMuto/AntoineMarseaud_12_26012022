import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`  
  html {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
    &:disabled,
    &:disabled:hover {
      cursor: auto;
    }
  }
  
  a, a:visited {
    text-decoration: none;
  }
  
`
