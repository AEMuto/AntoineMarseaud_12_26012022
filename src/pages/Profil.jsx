import { useContext, useEffect, useState } from 'react'
import { useAxios } from '../services/useAxios'
import { UserContext } from '../utils/context'
import Loader from '../components/Loader'
import Error from '../components/Error'
import styled from 'styled-components'
import KeyDataCard from '../components/KeyDataCard'

function Profil() {
  const { userId } = useContext(UserContext)
  const { data, isLoading, error } = useAxios(userId)
  const { firstName, todayScore, keyData, activity, average } = data

  if (isLoading) return <Loader />
  if (error) return <Error error={error} />

  const molecules = Object.keys(keyData)
  console.log(molecules)
  return (
    <Container>
      <Header>
        <h1>
          Bonjour <span>{firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Header>
      <Main>
        <ChartsContainer>
          {/*Chart 1*/}
          {/*Chart 2*/}
          {/*Chart 3*/}
          {/*Chart 4*/}
        </ChartsContainer>
        <KeyDataContainer>
          {molecules.map((molecule, index) => {
            return (
              <KeyDataCard
                value={keyData[molecule]}
                type={molecule}
                key={`${molecule}-${index}`}
              />
            )
          })}
        </KeyDataContainer>
      </Main>
    </Container>
  )
}

export default Profil

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  span {
    color: red;
  }
`
const Main = styled.main`
  flex: 1;
  display: flex;
  margin-top: 4.5rem;
`
const ChartsContainer = styled.section`
  flex: 1;
  background-color: cornflowerblue;
`
const KeyDataContainer = styled.aside`
  //flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 258px;
  margin-left: 1.875rem;
`
