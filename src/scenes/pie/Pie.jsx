import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'
import { mockPieData as data } from '../../data/mockData'
import { Box } from '@mui/material'

const Pie = () => {
  return (
    <Box m="20px">
    <Header title="Pie Chart" subtitle="Simple Pie Chart" />
    <Box height="75vh">
      <PieChart data={data} />
    </Box>
  </Box>
  )
}

export default Pie