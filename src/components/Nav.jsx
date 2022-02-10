import { useContext, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../utils/context'
import Icon from './Icon'
import logo from '../assets/logo.svg'

function Nav() {
  const { userId } = useContext(UserContext)
  return (
    <Fragment>
      <TopNav>
        <Logo src={logo} alt="" />
        <NavLinks>
          <NavLinkStyled to="/">Accueil</NavLinkStyled>
          <NavLinkStyled to={`/users/${userId}`}>Profil</NavLinkStyled>
          <NavLinkStyled to="/settings">Réglage</NavLinkStyled>
          <NavLinkStyled to="/community">Communauté</NavLinkStyled>
        </NavLinks>
      </TopNav>
      <LeftNav>
        <Copyright>Copyright, SportSee 2020</Copyright>
        <Icon name="meditate" margin="0.5rem" button={true} />
        <Icon name="swim" margin="0.5rem" button={true} />
        <Icon name="bike" margin="0.5rem" button={true} />
        <Icon name="barbell" margin="0.5rem" button={true} />
      </LeftNav>
    </Fragment>
  )
}

export default Nav

const TopNav = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 1;
  background-color: black;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5.625rem 1rem 2rem;
`

const LeftNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: calc(100vh - 90px);
  bottom: 0;
  left: 0;
  background-color: black;
`

const Logo = styled.img`
  max-width: 178px;
  margin-right: 6rem;
`

const NavLinks = styled.div`
  flex: 1;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinkStyled = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
`

const Copyright = styled.p`
  color: white;
  font-size: 0.75rem;
  transform-origin: center;
  transform: rotate(-90deg);
  min-width: 140px;
  position: absolute;
  bottom: 5rem;
`
