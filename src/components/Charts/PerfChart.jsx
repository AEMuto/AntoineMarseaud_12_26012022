import ChartContainer from './ChartContainer'
import { colors } from '../../theme/colors'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { hexToRGB } from '../../utils/hexToRGB'
import PropTypes from 'prop-types'

/**
 * The component that render the performance chart.
 * @param data
 * @param area
 * @returns {JSX.Element}
 * @constructor
 */
function PerfChart({ data, area }) {
  return (
    <ChartContainer area={area} bgColor={colors.grey4} borderRadius="5px">
      <ResponsiveContainer>
        <RadarChart
          data={data}
          outerRadius="65%"
          startAngle={-150}
          endAngle={210}
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 60]} />
          <PolarAngleAxis
            dataKey="type"
            stroke={hexToRGB(colors.white, 0.8)}
            tickLine={false}
            tick={<CustomTick />}
          />
          <Radar
            name="Performance"
            dataKey="score"
            fill={colors.primary}
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

PerfChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  area: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default PerfChart

/**
 * https://stackoverflow.com/questions/59361614/custom-label-on-recharts-radar-chart
 * There is no simple and easy way to place and stylize our label on a radar chart.
 * This function resolve this, at least partially.
 * @param payload
 * @param x
 * @param y
 * @param textAnchor
 * @param stroke
 * @param radius
 * @returns {JSX.Element}
 */
function CustomTick({ payload, x, y, textAnchor, stroke, radius }) {
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        radius={radius}
        stroke={stroke}
        x={x}
        y={y}
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={textAnchor}
      >
        {placeCustomTickLabel(payload, x, hexToRGB(colors.white, 0.8))}
      </text>
    </g>
  )
}

/**
 * Modify the position of the labels thanks to the dx and dy property that
 * each svg element can have. 90° is the top level label, and by default
 * it's a bit to close to the painted Axis, so we displace it by -5 on the Y axis
 * with dy=-5 et voilà ! Same logic for each label, for example, the bottom one
 * is -90°, and it's also too close by default, so we translate it further
 * down the Y axis with dy=15, etc...
 * @param payload
 * @param x
 * @param fill
 * @returns {JSX.Element}
 */
function placeCustomTickLabel(payload, x, fill) {
  const { coordinate, value } = payload
  switch (coordinate) {
    case 90:
      return <CustomTickLabel x={x} dx={0} dy={-5} fill={fill} value={value} />
    case 30:
      return <CustomTickLabel x={x} dx={0} dy={5} fill={fill} value={value} />
    case -30:
      return <CustomTickLabel x={x} dx={0} dy={5} fill={fill} value={value} />
    case -90:
      return <CustomTickLabel x={x} dx={0} dy={15} fill={fill} value={value} />
    case -120:
      return <CustomTickLabel x={x} dx={0} dy={5} fill={fill} value={value} />
    case -150:
      return <CustomTickLabel x={x} dx={0} dy={5} fill={fill} value={value} />
    case -210:
      return <CustomTickLabel x={x} dx={0} dy={5} fill={fill} value={value} />
    default:
      console.log('Invalid Coordinate in RadarChart')
      break
  }
}

/**
 * CustomTickLabel.
 * Separated tspan for increasing readability.
 * @param value
 * @param x
 * @param dx
 * @param dy
 * @param fill
 * @returns {JSX.Element}
 * @constructor
 */
function CustomTickLabel({ value, x, dx, dy, fill }) {
  return (
    <tspan x={x} dx={dx} dy={dy} fill={fill}>
      {value}
    </tspan>
  )
}
