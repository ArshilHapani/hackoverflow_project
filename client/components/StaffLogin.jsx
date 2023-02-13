import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useStateContext } from "../context/stateContextProvider";
import { useNavigate } from "react-router-dom";
const StaffLogin = () => {
  const navigate = useNavigate();
  const { setSnackbar } = useStateContext();
  const [staff, setStaff] = useState({
    id: "",
    password: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    if (staff.id.length > 3) {
      setSnackbar({
        show: true,
        message: "The staff id exceeds the maximum range which is of 3",
        type: "error",
      });
      return;
    }

    const data = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFETUlOQURNSU4iLCJpYXQiOjE2NzYyODY4ODZ9.cSuiH5HKHlbacfzKXwPAhlF4ELtPDg2Ha6fauSg0IVQ",
      },
      body: JSON.stringify({
        user: "employee",
        id: staff.id,
        password: staff.password,
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

    setSnackbar({
      show: true,
      message: "Welcome",
      type: "success",
    });

    navigate("/staff-icard-create");
  };
  return (
    <form onSubmit={handleForm}>
      <Stack justifyContent="center" alignItems="center" height="100vh">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
          sx={{
            width: {
              xs: "80vw",
              md: "40vw",
              lg: "30vw",
            },
            height: {
              xs: "70vh",
              md: "60vh",
            },
            padding: "20px 1rem",
            border: "1px solid black",
          }}
        >
          <Typography fontSize={30} fontWeight={800}>
            Staff Login
          </Typography>
          <TextField
            label="Staff ID"
            variant="outlined"
            required
            type="number"
            onChange={(e) => setStaff({ ...staff, id: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            onChange={(e) => setStaff({ ...staff, password: e.target.value })}
          />
          <Button variant="outlined" type="submit">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default StaffLogin;
