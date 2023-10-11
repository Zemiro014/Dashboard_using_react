import { Box, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart'
import { mockGeographyData as data } from '../../data/mockData'
import { geoFeatures } from '../../data/mockGeoFeatures'
import { tokens } from '../../theme'

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid  ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart data={data} features={geoFeatures.features} />
      </Box>
    </Box>
  )
}

export default Geography