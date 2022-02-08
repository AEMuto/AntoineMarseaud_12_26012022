import { useContext, useEffect, useState } from 'react'
import { useAxios } from '../services/useAxios'
import { UserContext } from '../utils/context'
import Loader from '../components/Loader'
import Error from '../components/Error'
import styled from 'styled-components'
import KeyDataCard from '../components/KeyDataCard'
import ActivityChart from '../components/Charts/ActivityChart'
import AverageChart from '../components/Charts/AverageChart'
import PerfChart from '../components/Charts/PerfChart'
import ScoreChart from '../components/Charts/ScoreChart'
import { hexToRGB } from '../utils/hexToRGB'
import { colors } from '../theme/colors'

function Profil() {
  const { userId } = useContext(UserContext)
  const { data, isLoading, error } = useAxios(userId)
  const { firstName, todayScore, keyData, activity, average, perf } = data

  if (isLoading) return <Loader />
  if (error) return <Error error={error} />

  const molecules = Object.keys(keyData)

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
          <ActivityChart
            data={activity}
            area="activity"
            title="Activité quotidienne"
          />
          <AverageChart
            data={average}
            area="average"
            title="Durée moyenne des sessions"
            titleColor={hexToRGB(colors.white, 0.5)}
          />
          <PerfChart data={perf} area="perf" />
          <ScoreChart data={todayScore} area="score" />
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
  display: grid;
  grid-template-areas:
    'activity activity activity'
    'average perf score';
  grid-template-rows: 320px 263px;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;
  //background-color: cornflowerblue;
`
const KeyDataContainer = styled.aside`
  //flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 258px;
  margin-left: 1.875rem;
`
