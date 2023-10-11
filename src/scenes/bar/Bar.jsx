import React from 'react'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'
import { Box } from '@mui/material'
import { mockBarData as data } from '../../data/mockData'

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart data={data} />
      </Box>
    </Box>
  )
}

export default Bar