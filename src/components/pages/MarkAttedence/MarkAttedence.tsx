import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SubjectData from "../../../mock/Subject.json";
let input: any;

function MarkAttedence() {
  const [index, setindex] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setindex(event.target.value as string);
  };

  return (
    <div>
      <Typography variant="h5">Make Sheet</Typography>
      <Typography variant="subtitle1">Mark your attendance</Typography>
      <Divider sx={{ marginTop: "1rem" }} />
      <Box
        sx={{
          padding: "2rem 0rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          inputRef={(node) => {
            input = node;
          }}
        />
      </Box>
      <InputLabel id="demo-simple-select-label">index</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={index}
        label="index"
        onChange={handleChange}
      >
        {SubjectData.map((ele, index) => {
          return (
            <MenuItem key={index} value={index}>
              {ele.subjectName}
            </MenuItem>
          );
        })}
      </Select>

      <Box> {index + 1}</Box>
    </div>
  );
}

export default MarkAttedence;
