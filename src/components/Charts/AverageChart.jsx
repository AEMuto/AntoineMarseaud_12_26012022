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
} from 'recharts'
import { colors } from '../../theme/colors'
import ChartContainer from './ChartContainer'

function AverageChart({ data, area }) {
  return (
    <ChartContainer area={area} bgColor={colors.primary} borderRadius="5px">
      <ResponsiveContainer>
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke={colors.white}
            strokeWidth={3}
          />
          <XAxis dataKey="day" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default AverageChart
