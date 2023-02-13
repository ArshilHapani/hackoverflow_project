import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useStateContext } from "../../context/stateContextProvider";
const textFieldStyle = {
  width: "100%",
};

const CreateStaffModel = ({ closeFeature }) => {
  const { setSnackbar } = useStateContext();
  const [staff, setStaff] = useState({
    id: "",
    name: "",
    department: "",
    contact: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (staff.id.length > 3) {
      setSnackbar({
        show: true,
        message: "The staff id exceeds the maximum range which is of 3",
        type: "error",
      });
      return;
    }
    if (staff.contact.length !== 10) {
      setSnackbar({
        show: true,
        message: "The length of contact number must be equal to 10",
        type: "error",
      });
      return;
    }
    const data = await fetch("http://localhost:8080/addEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFETUlOQURNSU4iLCJpYXQiOjE2NzYyODY4ODZ9.cSuiH5HKHlbacfzKXwPAhlF4ELtPDg2Ha6fauSg0IVQ",
      },
      body: JSON.stringify({
        eid: staff.id,
        name: staff.name,
        password: staff.password,
        dept: staff.department,
        contact: staff.contact,
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
    // console.log(staff); //data is in staff
    setSnackbar({
      show: true,
      message: "Staff added successfully",
      type: "success",
    });
    closeFeature(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" gap={3}>
        <Typography fontSize={40} fontWeight={800}>
          Create Staff
        </Typography>
        <TextField
          label="ID"
          helperText="Employee ID"
          type="number"
          variant="outlined"
          sx={textFieldStyle}
          onChange={(e) => setStaff({ ...staff, id: e.target.value })}
        />
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          sx={textFieldStyle}
          onChange={(e) => setStaff({ ...staff, name: e.target.value })}
        />
        <TextField
          label="Department"
          type="text"
          variant="outlined"
          sx={textFieldStyle}
          onChange={(e) => setStaff({ ...staff, department: e.target.value })}
        />
        <TextField
          label="Contact"
          type="number"
          variant="outlined"
          sx={textFieldStyle}
          onChange={(e) => setStaff({ ...staff, contact: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={textFieldStyle}
          required
          onChange={(e) => setStaff({ ...staff, password: e.target.value })}
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
  );
};

export default CreateStaffModel;
