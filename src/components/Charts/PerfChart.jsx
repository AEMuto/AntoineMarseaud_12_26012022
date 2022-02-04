import ChartContainer from './ChartContainer'
import { colors } from '../../theme/colors'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

function PerfChart({ data, area }) {
  return (
    <ChartContainer area={area} bgColor={colors.grey4} borderRadius="5px">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type" />
          {/*<PolarRadiusAxis />*/}
          <Radar
            name="Performance"
            dataKey="score"
            // stroke={colors.white}
            fill={colors.primary}
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default PerfChart
