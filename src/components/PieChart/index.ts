import { Chart } from "react-google-charts"

interface PieChartProps {
  up: number,
  error: number,
  warning: number
}
export function PieChart({ up, error, warning }: PieChartProps){
  return (
    <div>
      <Chart chartType="PieChart"
        data={[
          ['Serviços', 'Status'],
          ['Serviços ativos', up],
          ['Serviços com erros', error],
          ['Serviços inativos', warning],
        ]}
        option={{title: 'Visão geral dos serviços'}} />
    </div>
  )
}