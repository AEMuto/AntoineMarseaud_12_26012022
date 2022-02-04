import ChartContainer from './ChartContainer'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { colors } from '../../theme/colors'

function ScoreChart({ data, area }) {
  return (
    <ChartContainer area={area}>
      <ResponsiveContainer>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="score"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill={colors.pink}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={!index ? `${colors.primary}` : 'lightgrey'}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default ScoreChart
