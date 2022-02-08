import {
  ResponsiveContainer,
  LineChart,
  Bar,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  Rectangle,
} from 'recharts'
import { colors } from '../../theme/colors'
import ChartContainer from './ChartContainer'
import styled from 'styled-components'
import { hexToRGB } from '../../utils/hexToRGB'

function AverageChart({ data, area, title, titleColor }) {
  //console.log(data)
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

export default AverageChart

const renderTooltip = ({ active, payload }) => {
  if (active && payload) {
    return <CustomTooltip>{payload[0].payload.sessionLength} min</CustomTooltip>
  }
  return null
}

const CustomCursor = (props) => {
  const { points, width, height, stroke } = props
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      stroke="none"
      x={x}
      y={0}
      width={width}
      height={height}
      style={{ zIndex: -999 }}
    />
  )
}

const CustomTooltip = styled.p`
  background-color: ${colors.white};
  padding: 0.6rem;
  font-weight: 500;
  font-size: 0.6rem;
`
