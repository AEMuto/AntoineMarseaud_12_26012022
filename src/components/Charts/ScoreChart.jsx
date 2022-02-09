import ChartContainer from './ChartContainer'
import {
  RadialBarChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadialBar,
} from 'recharts'
import { colors } from '../../theme/colors'

function ScoreChart({ data, area, title }) {
  console.log(data)
  return (
    <ChartContainer area={area} title={title}>
      <ResponsiveContainer>
        <RadialBarChart
          data={dataMock}
          startAngle={180}
          endAngle={0}
          innerRadius="10%"
          outerRadius="80%"
          background
        >
          <RadialBar dataKey="uv" clockWise={true} minAngle={45} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default ScoreChart

const dataMock = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
]

// function ScoreChart({ data, area }) {
//   return (
//     <ChartContainer area={area}>
//       <ResponsiveContainer>
//         <PieChart width={730} height={250}>
//           <Pie
//             data={data}
//             dataKey="score"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             innerRadius={60}
//             outerRadius={80}
//             fill={colors.pink}
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={!index ? `${colors.primary}` : 'lightgrey'}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   )
// }
