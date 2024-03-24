import React from "react";
import MarksheetDoc from "./MarksheetDoc";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SubjectSubTopic from "../MakeMarksheet/SubjectSubTopic";
import Autocomplete, {
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
//Json data source
import SubjectData from "../../../mock/Subject.json";
import StudentData from "../../../mock/StudentData.json";
import StudentPagenationTable from "../../common/studentPagenationTable/StudentPagenationTable";

function MakeMarksheet() {
  const [index, setindex] = React.useState<number | null>(null);
  const [value, setValue] = React.useState<string | null>();

  const findstudent = StudentData.filter((ele) =>
    value?.includes(ele.student_first_name)
  );
  const handleChange = (event: SelectChangeEvent<number>) => {
    setindex(event.target.value as number);
  };

  const StudentNameselect = StudentData.map(
    (ele) => `${ele.student_first_name} ${ele.student_last_name}`
  );

  return (
    <>
      <div className="containern m-auto mx-9 mt-9">
        <div className=" flex justify-between ">
          <div>
            <div className=" text-6xl">Make Sheet</div>
          </div>
          <div>
            <PDFDownloadLink
              document={<MarksheetDoc />}
              fileName="somename.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Loading
                  </button>
                ) : (
                  <button
                    type="button"
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Download now
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>

        <Typography variant="subtitle1">Mark student Marksheet</Typography>
        <Divider sx={{ marginTop: "1rem" }} />
        <div className="py-4">
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={StudentNameselect}
              sx={{ width: 300 }}
              value={value}
              onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label={"Student Name"} />
              )}
            />
          </Box>{" "}
        </div>

        <div className="py-4">
          <StudentPagenationTable data={findstudent} />
        </div>
        <div className="py-4">
          <Typography variant="h4">Select Subject</Typography>
        </div>
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
            <p className="text-md py-3 text-2xl"> Sub Topic of the Subject</p>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Topics Names{" "}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Practical
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Written
                      </th>
                      <th scope="col" className="px-6 py-3">
                        oral
                      </th>
                      <th scope="col" className="px-6 py-3">
                        TOTAL MARKS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {index !== null &&
                      SubjectData[index].sub_subjectName.map(
                        (subSubject, idx) => (
                          <SubjectSubTopic key={idx} subtopics={subSubject} />
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default MakeMarksheet;
function setSelectedIndex(index: number) {
  throw new Error("Function not implemented.");
}
