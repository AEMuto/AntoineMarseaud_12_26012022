import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  XAxis,
  Line,
  Rectangle,
} from 'recharts'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import ChartContainer from './ChartContainer'
import { hexToRGB } from '../../utils/hexToRGB'
import PropTypes from 'prop-types'

/**
 * The component that render the average session chart.
 * @param data
 * @param area
 * @param title
 * @param titleColor
 * @returns {JSX.Element}
 * @constructor
 */
function AverageChart({ data, area, title, titleColor }) {
  return (
    <ChartContainer
      area={area}
      bgColor={colors.primary}
      borderRadius="5px"
      title={title}
      titleColor={titleColor}
    >
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 70,
            right: 30,
            left: 30,
            bottom: 60,
          }}
        >
          <Tooltip
            content={renderTooltip}
            cursor={<CustomCursor width={500} height={500} />}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke={colors.white}
            strokeWidth={3}
            dot={false}
            connectNulls
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke={hexToRGB(colors.white, 0.5)}
            dy={45}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

AverageChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  area: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default AverageChart

/**
 * As in the activity chart we want a custom Tooltip. Thanks to that, we can make it.
 * @param active
 * @param payload
 * @returns {JSX.Element|null}
 */
const renderTooltip = ({ active, payload }) => {
  if (active && payload) {
    return <CustomTooltip>{payload[0].payload.sessionLength} min</CustomTooltip>
  }
  return null
}

/**
 * Here we make a custom background when the user hover on this chart.
 * We render a rectangle (svg element, remember : no html element in a svg is possible and
 * the whole chart is one big svg. Legend and Tooltip doesn't work the same way).
 * The rectangle has its dimension defined as prop.
 * x is the calculated position of the user's cursor on the X axis, we don't want to change it,
 * it's precalculated for us by recharts.
 * But we want to fix the Y value, so it doesn't change, and the rectangle (in the background)
 * follow the user's cursor just on the X axis. The fill property is pretty self-explanatory.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CustomCursor = (props) => {
  const { points, width, height } = props
  const { x } = points[0]
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      stroke="none"
      x={x}
      y={0}
      width={width}
      height={height}
    />
  )
}

const CustomTooltip = styled.p`
  background-color: ${colors.white};
  padding: 0.6rem;
  font-weight: 500;
  font-size: 0.6rem;
`
