import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//mock data
import data from "../../../mock/MOCK_DATA.json";

export default function StudentPagenationTable() {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "3rem" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>last_Name</TableCell>
            <TableCell>Student_id</TableCell>
            <TableCell>Batch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.student_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.last_name}
              </TableCell>
              <TableCell>{row.student_id}</TableCell>
              <TableCell>{row["A-Z"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
