import React from 'react'
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box"
function Dashboard() {
  return (
    <>
      <Box>
        <Typography variant='h2'>
          Dashboard
        </Typography>

        <Typography variant='h4'>
          BBA {"(CA)"}
        </Typography>
        <Typography>
          This application is used to create a management software for department use.
        </Typography>
      </Box>
    </>
  )
}

export default Dashboard
