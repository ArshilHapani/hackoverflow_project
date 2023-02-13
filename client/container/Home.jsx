import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        height: { xs: "100vh", md: "70vh" },
        display: "flex",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Stack
        gap={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={40}>Select your role</Typography>
        <Link
          style={{ textDecoration: "none", color: "#fcfcfc" }}
          to="admin-login"
        >
          <Button variant="contained" sx={{ width: "150px" }}>
            Admin
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#fcfcfc" }}
          to="staff-login"
        >
          <Button variant="contained" sx={{ width: "150px" }}>
            Staff
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#fcfcfc" }}
          to="student-login"
        >
          <Button variant="contained" sx={{ width: "150px" }}>
            Students
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Home;
