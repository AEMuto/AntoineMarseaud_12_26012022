import ChartContainer from './ChartContainer'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { colors } from '../../theme/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * The component that render the score chart.
 * @param data
 * @param area
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
function ScoreChart({ data, area, title }) {
  return (
    <ChartContainer area={area} title={title}>
      <CustomLabel>
        <h3>{data[0].score}%</h3>
        <p>
          de votre <br />
          objectif
        </p>
      </CustomLabel>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="score"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            startAngle={90}
            endAngle={450}
            cornerRadius={40}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={!index ? `${colors.primary}` : 'none'}
              />
            ))}
          </Pie>
          <Pie
            data={data}
            dataKey="score"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={75}
            fill={colors.white}
            stroke={'none'}
            blendStroke={true}
            isAnimationActive={false}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

ScoreChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  area: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default ScoreChart

const CustomLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 999;
  h3 {
    font-size: 26px;
  }
  p {
    color: ${colors.grey3};
  }
`
