import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import Prbutton from "../common/PrButton/Prbutton";

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
          <TextField id="outlined-uncontrolled" label="Uncontrolled" />
          <TextField id="outlined-uncontrolled" label="Uncontrolled" />
          <TextField id="outlined-uncontrolled" label="Uncontrolled" />
          <TextField id="outlined-uncontrolled" label="Uncontrolled" />
        </Box>
        <Prbutton buttontext="Submit" />
      </Box>
    </>
  );
}

export default AddStudentPage;
