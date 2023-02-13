import React, { useState } from "react";
import {
  Button,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { BsFillCameraFill } from "react-icons/bs";
import { useStateContext } from "../context/stateContextProvider";
const textFieldStyle = {
  width: "100%",
};
const StaffIDCreate = () => {
  const [staffId, setStaffId] = useState({
    name: "",
    position: "",
    photo: "",
    department: "",
    dob: "",
    contact: "",
    address: "",
    blood: "",
  });
  const { setSnackbar } = useStateContext();
  const handleClick = (e) => {
    e.preventDefault();

    if (staffId.contact.length !== 10) {
      setSnackbar({
        show: true,
        message: "The contact number must be equal to length of 10",
        type: "error",
      });
      return;
    }
  };
  return (
    <form onSubmit={handleClick}>
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
              lg: "60vw",
            },
            padding: "20px 1rem",
            border: "1px solid black",
          }}
        >
          <Typography fontSize={40} fontWeight={800}>
            Generate Staff Identity card
          </Typography>
          <TextField
            label="Name"
            helperText="please enter your full name"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) => setStaffId({ ...staffId, name: e.target.value })}
          />

          <TextField
            label="Position"
            helperText="please enter your current working position"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStaffId({ ...staffId, position: e.target.value })
            }
          />

          <TextField
            label="Contact Number"
            helperText="please enter your mobile number"
            variant="outlined"
            type="number"
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStaffId({ ...staffId, contact: e.target.value })
            }
          />

          <TextField
            label="Department"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStaffId({ ...staffId, department: e.target.value })
            }
          />

          <TextField
            type="date"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) => setStaffId({ ...staffId, dob: e.target.value })}
          />

          <TextField
            label="Address"
            helperText="Enter your full address"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStaffId({ ...staffId, address: e.target.value })
            }
          />

          <TextField
            label="Blood group"
            helperText="Enter your full address"
            variant="outlined"
            sx={textFieldStyle}
            required
            onChange={(e) => setStaffId({ ...staffId, blood: e.target.value })}
          />

          <Stack direction="row">
            <Button
              variant="outlined"
              component="label"
              startIcon={<BsFillCameraFill />}
            >
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Stack>
          <Button variant="outlined" type="submit">
            Create Identity Card
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default StaffIDCreate;
