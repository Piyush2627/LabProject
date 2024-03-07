import React from "react";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
interface Props {
  subtopics: string;
}
function SubjectSubTopic({ subtopics }: Props) {
  return (
    <div>
      {subtopics}
      is having this topics
      <TextField id="outlined-basic" label={subtopics} variant="outlined" />
    </div>
  );
}

export default SubjectSubTopic;
