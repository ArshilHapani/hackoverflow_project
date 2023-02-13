import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useStateContext } from "../../context/stateContextProvider";
const textFieldStyle = {
  width: "100%",
};
const CreateStudentModel = ({ closeFeature }) => {
  const { setSnackbar } = useStateContext();
  const [student, setStudent] = useState({
    spid: "",
    name: "",
    course: "",
    contact: "",
    password: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    if (student.spid.length !== 10) {
      setSnackbar({
        show: true,
        message: "The length of SPID must be equal to 10",
        type: "error",
      });
      return;
    }
    if (student.contact.length !== 10) {
      setSnackbar({
        show: true,
        message: "The length of contact number must be equal to 10",
        type: "error",
      });
      return;
    }
    setSnackbar({
      show: true,
      message: "Student added successfully",
      type: "success",
    });
    // console.log(student); //user data
    const data = await fetch("http://localhost:8080/addStudent", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFETUlOQURNSU4iLCJpYXQiOjE2NzYyODY4ODZ9.cSuiH5HKHlbacfzKXwPAhlF4ELtPDg2Ha6fauSg0IVQ",
      },
      body: JSON.stringify({
        spid: student.spid,
        name: student.name,
        password: student.password,
        stream: student.course,
        contact: student.contact,
      }),
    });
    const response = await data.json();
    console.log(response);
    const { status, msg } = response;
    if (status === "unsuccessful") {
      setSnackbar({
        show: true,
        message: msg,
        type: "error",
      });
      return;
    }
    closeFeature(false);
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <Stack direction="column" gap={5}>
          <Typography fontSize={40} fontWeight={800}>
            Create Student
          </Typography>
          <TextField
            label="SPID"
            variant="outlined"
            sx={textFieldStyle}
            required
            type="number"
            pattern="[0-9]"
            onChange={(e) => setStudent({ ...student, spid: e.target.value })}
          />
          <TextField
            label="Name"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
          <TextField
            label="Course"
            type="text"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStudent({ ...student, password: e.target.value })
            }
          />
          <TextField
            label="Contact"
            type="number"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStudent({ ...student, contact: e.target.value })
            }
          />
          <Stack direction="row" gap={5} justifyContent="flex-end">
            <Button variant="outlined" color="success" type="submit">
              Add Student
            </Button>
            <Button
              onClick={() => closeFeature(false)}
              variant="outlined"
              color="error"
            >
              Close
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default CreateStudentModel;
