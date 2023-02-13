import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/stateContextProvider";
let success;
const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    id: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setSnackbar } = useStateContext();
  const handleForm = async (e) => {
    e.preventDefault();
    setSnackbar({
      show: true,
      message: "Welcome",
      type: "success",
    });
    await fetchToken();
    navigate("/admin-page");
  };
  const fetchToken = async () => {
    const data = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        user: "admin",
        password: credentials.password,
        id: credentials.id,
      }),
    });

    const response = await data.json();
    console.log(response);
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
            Admin Sign in
          </Typography>
          <TextField
            label="Admin ID"
            variant="outlined"
            required
            onChange={(e) =>
              setCredentials({ ...credentials, id: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />

          <Button variant="outlined" type="submit">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default AdminLogin;
