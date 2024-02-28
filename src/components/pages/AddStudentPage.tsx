import React from "react";

//Matrial Ui Component
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
//Coustom Components
import StudentPagenationTable from "../common/studentPagenationTable/StudentPagenationTable";

function AddStudentPage() {
  return (
    <>
      <Box>
        <Typography variant="h3">Add New Student</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cum!
        </Typography>
        <Divider sx={{ marginTop: "20px" }} />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <Typography>Enter your basic details</Typography>
          <TextField id="outlined-uncontrolled" label="First Name" />
          <TextField id="outlined-uncontrolled" label="Last Name" />
          <TextField id="outlined-uncontrolled" label="Enroll No / Roll No" />
          <TextField id="outlined-uncontrolled" label="Batch" />
          <TextField id="outlined-uncontrolled" label="Year" />
          <Box>
            <Button variant="contained" endIcon={<PersonAddIcon />}>
              Send
            </Button>
          </Box>
        </Box>
        <StudentPagenationTable />
      </Box>
    </>
  );
}

export default AddStudentPage;
