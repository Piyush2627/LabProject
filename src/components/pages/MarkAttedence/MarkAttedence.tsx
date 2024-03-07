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
import SubjectSubTopic from "../MakeMarksheet/SubjectSubTopic";

function MarkAttedence() {
  const [index, setindex] = React.useState<number | null>(null);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setindex(event.target.value as number);
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
        {" "}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Box sx={{ marginBottom: "16px" }}>
        <Typography variant="body1">Select Subject</Typography>
      </Box>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index ?? ""}
          label="Subject"
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
      </FormControl>
      <Box>
        <div className="">
          <p className="text-md py-3"> Sub Topic of the Subject</p>
          <div>
            {index !== null &&
              SubjectData[index].sub_subjectName.map((subSubject, idx) => (
                <SubjectSubTopic key={idx} subtopics={subSubject} />
              ))}
          </div>
        </div>
      </Box>
    </div>
  );
}

export default MarkAttedence;
