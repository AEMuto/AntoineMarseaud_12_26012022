import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
} from 'recharts'
import { colors } from '../../theme/colors'
import ChartContainer from './ChartContainer'
import styled from 'styled-components'

function ActivityChart({ data, area, title, titleColor }) {
  return (
    <ChartContainer area={area} title={title} titleColor={titleColor}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 110, right: 30, bottom: 30, left: 40 }}
          barSize={10}
          barGap={10}
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} dy={25} stroke={colors.grey2} />
          <YAxis
            dataKey="calories"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            dx={25}
            stroke={colors.grey2}
          />
          <Tooltip
            content={renderTooltip}
            position={{ y: 65 }}
            allowEscapeViewBox={{ x: true }}
          />
          <Legend
            wrapperStyle={{ top: 35, right: 30 }}
            content={renderLegend}
          />
          <Bar dataKey="kilogram" fill={colors.grey4} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="#e60000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default ActivityChart

const renderLegend = ({ payload }) => {
  return (
    <CustomLegend>
      {payload.map(({ value }, index) =>
        value === 'calories' ? (
          <li key={`item-${index}`} className={`${value} circle`}>
            Calories brûlées (kCal)
          </li>
        ) : (
          <li key={`item-${index}`} className={`${value} circle`}>
            Poids (kg)
          </li>
        )
      )}
    </CustomLegend>
  )
}

const renderTooltip = ({ payload, label, active }) => {
  if (active) {
    console.log(payload, label)
    return (
      <CustomTooltip>
        <p>{payload[0].payload.kilogram}kg</p>
        <p>{payload[0].payload.calories}Kcal</p>
      </CustomTooltip>
    )
  }
  return null
}

const CustomLegend = styled.ul`
  display: flex;
  justify-content: flex-end;

  li {
    position: relative;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${colors.grey3};
  }

  li:before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #e60000;
    top: 50%;
    transform: translateY(-50%) translateX(-200%);
  }

  li:nth-of-type(1) {
    margin-right: 2rem;
    &:before {
      background-color: #000;
    }
  }
`

const CustomTooltip = styled.div`
  background-color: #e60000;
  color: ${colors.white};
  min-height: 5rem;
  min-width: 2.5rem;
  font-size: 0.6rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  margin: 0 2.5rem;
  //margin-top: -50%;
  position: relative;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
`