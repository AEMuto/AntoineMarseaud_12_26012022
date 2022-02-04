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

const renderLegend = (props) => {
  const { payload } = props
  console.log(payload)
  return (
    <ul>
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>{entry.value}</li>
      ))}
    </ul>
  )
}

function ActivityChart({ data, area, title, titleColor }) {
  return (
    <ChartContainer area={area} title={title} titleColor={titleColor}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 110, right: 30, bottom: 30, left: 40 }}
          barSize={10}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} dy={25} />
          <YAxis
            dataKey="calories"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            dx={25}
          />
          <Tooltip />
          <Legend
            align="right"
            iconType="circle"
            wrapperStyle={{ top: 25, right: 30 }}
            content={renderLegend}
          />
          <Bar dataKey="kilogram" fill={colors.grey4} radius={[10, 10, 0, 0]} />
          <Bar
            dataKey="calories"
            fill={colors.primary}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default ActivityChart
