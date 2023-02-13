import {
  Button,
  Checkbox,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateStaffModel from "./CreateStaffModel";
import CreateStudentModel from "./CreateStudentModel";
import data from "./sample.json";
import employeeData from "./student.json";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f2f2f2",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const AdminPage = () => {
  const [openStudentModel, setOpenStudentModel] = useState(false);
  const [openStaffModel, setOpenStaffModel] = useState(false);
  const { students } = data;
  const {
    s_enroll,
    s_spid,
    s_name,
    s_stream,
    s_dob,
    s_contact,
    s_address,
    s_blood,
    s_status,
  } = students;
  const student_rows = [
    createData(
      s_enroll,
      s_spid,
      s_name,
      s_stream,
      s_dob,
      s_contact,
      s_address,
      s_blood,
      s_status
    ),
  ];
  const { employee } = employeeData;
  const {
    e_id,
    e_name,
    e_pwd,
    e_pos,
    e_dept,
    e_dob,
    e_contact,
    e_address,
    e_blood,
    e_status,
  } = employee;
  const employee_row = [
    createEmploy(
      e_id,
      e_name,
      e_pwd,
      e_pos,
      e_dept,
      e_dob,
      e_contact,
      e_address,
      e_blood,
      e_status
    ),
  ];
  function createEmploy(
    e_id,
    e_name,
    e_pwd,
    e_pos,
    e_dept,
    e_dob,
    e_contact,
    e_address,
    e_blood,
    e_status
  ) {
    return {
      e_id,
      e_name,
      e_pwd,
      e_pos,
      e_dept,
      e_dob,
      e_contact,
      e_address,
      e_blood,
      e_status,
    };
  }
  function createData(
    Enrollment,
    SP_ID,
    Name,
    Stream,
    DOB,
    Contact,
    Address,
    Blood,
    Status
  ) {
    return {
      Enrollment,
      SP_ID,
      Name,
      Stream,
      DOB,
      Contact,
      Address,
      Blood,
      Status,
    };
  }
  return (
    <>
      <Box
        sx={{
          height: { xs: "100vh", md: "70vh" },
          display: "flex",
          justifyContent: "center",
          gap: 10,
          overflow: "auto",
        }}
      >
        <Stack
          gap={5}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize={40}>Admin page</Typography>
          <Button
            variant="contained"
            sx={{ width: "150px" }}
            onClick={() => setOpenStudentModel(true)}
          >
            Add Student
          </Button>
          {/* Student model */}
          <Modal
            open={openStudentModel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreateStudentModel closeFeature={setOpenStudentModel} />
            </Box>
          </Modal>

          <Button
            variant="contained"
            sx={{ width: "150px" }}
            onClick={() => setOpenStaffModel(true)}
          >
            Add Staff
          </Button>
          {/* Staff model */}
          <Modal
            open={openStaffModel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreateStaffModel closeFeature={setOpenStaffModel} />
            </Box>
          </Modal>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Typography fontSize={20}>Pending student request</Typography>
          <TableContainer component={Paper} sx={{ marginBottom: "100px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Enrollment</TableCell>
                  <TableCell>SP-ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Stream</TableCell>
                  <TableCell>Date Of Birth</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Blood Group</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Verify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {student_rows.map((row) => (
                  <TableRow
                    key={row.Enrollment}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Enrollment}
                    </TableCell>
                    <TableCell>{row.SP_ID}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.Stream}</TableCell>
                    <TableCell>{row.DOB}</TableCell>
                    <TableCell>{row.Contact}</TableCell>
                    <TableCell>{row.Address}</TableCell>
                    <TableCell>{row.Blood}</TableCell>
                    <TableCell>{row.Status}</TableCell>
                    <TableCell>
                      <Checkbox onClick={() => console.log(row.SP_ID)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography fontSize={20}>Pending Staff request</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Blood Group</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Verify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employee_row.map((row) => (
                  <TableRow
                    key={row.e_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.e_id}</TableCell>
                    <TableCell>{row.e_name}</TableCell>
                    <TableCell>{row.e_pos}</TableCell>
                    <TableCell>{row.e_dept}</TableCell>
                    <TableCell>{row.e_dob}</TableCell>
                    <TableCell>{row.e_contact}</TableCell>
                    <TableCell>{row.e_address}</TableCell>
                    <TableCell>{row.e_blood}</TableCell>
                    <TableCell>{row.e_status}</TableCell>
                    <TableCell>
                      <Checkbox onClick={() => console.log(row.e_id)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
    </>
  );
};

export default AdminPage;
