import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useStateContext } from "../context/stateContextProvider";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const { setSnackbar } = useStateContext();
  const [student, setStudent] = useState({
    spId: "",
    password: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    //     console.log(student); //Student data
    if (student.spId.length !== 10) {
      setSnackbar({
        show: true,
        message: "The Student must be equal to length of 10",
        type: "error",
      });
      return;
    }

    // API Call

    const data = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFETUlOQURNSU4iLCJpYXQiOjE2NzYyODY4ODZ9.cSuiH5HKHlbacfzKXwPAhlF4ELtPDg2Ha6fauSg0IVQ",
      },
      body: JSON.stringify({
        user: "student",
        id: student.spId,
        password: student.password,
      }),
    });
    const response = await data.json();
    const { status, msg } = response;
    if (status === "unsuccessfull") {
      setSnackbar({
        show: true,
        message: msg,
        type: "error",
      });
      return;
    }
    localStorage.setItem("spid", student.spId);
    setSnackbar({
      show: true,
      message: "Welcome",
      type: "success",
    });
    navigate("/student-icard-create");
  };
  return (
    <form onSubmit={handleForm}>
      <Stack justifyContent="center" alignItems="center">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
          sx={{
            width: {
              xs: "80vw",
              md: "40vw",
              lg: "50vw",
            },
            height: {
              xs: "70vh",
              md: "80vh",
            },
            padding: "20px 1rem",
            border: "1px solid black",
          }}
        >
          <Typography fontSize={40} fontWeight={800}>
            Student Login
          </Typography>
          <TextField
            label="SP-ID"
            helperText="please enter your SP ID provided by administrator"
            variant="outlined"
            sx={{ width: "70%" }}
            type="number"
            onChange={(e) => setStudent({ ...student, spId: e.target.value })}
            required
          />

          <TextField
            label="Password"
            helperText="please enter your Password provided by administrator"
            variant="outlined"
            type="password"
            sx={{ width: "70%" }}
            onChange={(e) =>
              setStudent({ ...student, password: e.target.value })
            }
            required
          />
          <Button variant="outlined" type="submit">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default StudentLogin;
