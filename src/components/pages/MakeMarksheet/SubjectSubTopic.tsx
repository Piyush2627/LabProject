import React from "react";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
interface Props {
  subtopics: string;
}
function SubjectSubTopic({ subtopics }: Props) {
  return (
    <div>
      <div className="p-3 flex align-middle">
        <div>{subtopics}</div>
        <div></div>
      </div>
    </div>
  );
}

export default SubjectSubTopic;
