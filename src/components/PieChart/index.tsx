'use client'
import { Chart } from "react-google-charts"
import { Content } from "./style"

interface PieChartProps {
  up: number,
  error: number,
  warning: number
}
export function PieChart({ up, error, warning }: PieChartProps){
  return (
    <Content>
      <Chart chartType="PieChart"
        data={[
          ['Serviços', 'Status'],
          ['Serviços ativos', up],
          ['Serviços com erros', error],
          ['Serviços inativos', warning],
        ]}
        options={{title: 'Visão geral dos serviços'}} 
        height='60vh'
        />
    </Content>
  )
}