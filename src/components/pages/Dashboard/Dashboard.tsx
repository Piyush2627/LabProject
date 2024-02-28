import React from 'react'
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box"
import StudentData from "../../../mock/StudentData.json"
import BasicCard from '../../common/BasicCard/BasicCard'
import Divider from '@mui/material/Divider'

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
        <Typography variant='body1'>
          This application is used to create a management software for department use.
        </Typography>
        <Divider sx={{ marginTop: "1rem" }} />
        <BasicCard header="Count of the Student in the system" contain={StudentData.length} />
      </Box>
    </>
  )
}

export default Dashboard
