import React, { Component, useEffect, useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { BsFillCameraFill } from "react-icons/bs";
import { useStateContext } from "../context/stateContextProvider";
import { useNavigate } from "react-router-dom";

const textFieldStyle = {
  width: "100%",
};

const StudentIDCreate = () => {
  const navigate = useNavigate();

  const { setSnackbar } = useStateContext();
  const [responseState, setResponseState] = useState({
    enroll: "",
    name: "",
    stream: "",
    dob: "",
    contact: "",
    address: "",
    blood: "",
    status: "",
  });
  const [studentId, setStudentId] = useState({
    name: "",
    photo: "",
    erId: "",
    course: "",
    dob: "",
    address: "",
    spid: "",
    blood: "",
  });
  const apiCall = async () => {
    const data = await fetch("http://localhost:8080/fetchStudent", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFETUlOQURNSU4iLCJpYXQiOjE2NzYyODY4ODZ9.cSuiH5HKHlbacfzKXwPAhlF4ELtPDg2Ha6fauSg0IVQ",
      },
      body: JSON.stringify({
        spid: localStorage.getItem("spid"),
      }),
    });
    const response = await data.json();
    const { student } = response;
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
    } = student;
    setResponseState({
      name: s_name,
      stream: s_stream,
      dob: s_dob,
      contact: s_contact,
      address: s_address,
      blood: s_blood,
      status: s_status,
    });
    const { status, msg } = response;
    if (status === "unsuccessfull") {
      setSnackbar({
        show: true,
        message: msg,
        type: "error",
      });
      return;
    }
  };

  useEffect(() => {
    apiCall();
  }, [responseState, setResponseState]);

  const handleForm = async (e) => {
    e.preventDefault();
    // validaton
    if (studentId.spid.length === 10) {
      setSnackbar({
        show: true,
        message: "The Student id must be equal to length of 10",
        type: "error",
      });
      return;
    }
    if (studentId.erId.length !== 18) {
      setSnackbar({
        show: true,
        message: "The Enrollment id must be equal to length of 18",
        type: "error",
      });
      return;
    }
    navigate("/student-icard");
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
              xs: "50vw",
              md: "30vw",
              lg: "45vw",
            },
            padding: "15px 1rem",
            border: "1px solid black",
          }}
        >
          <Typography fontSize={25} fontWeight={600}>
            Generate Student Identity Card
          </Typography>
          <TextField
            label="SPID"
            type="number"
            helperText="please enter your SPID provided by administrator"
            variant="outlined"
            sx={textFieldStyle}
            required
            value={localStorage.getItem("spid")}
            onChange={(e) =>
              setStudentId({ ...studentId, spid: e.target.value })
            }
          />
          <TextField
            label="Enrollment id"
            helperText="please enter your university enrollment number "
            type="number"
            variant="outlined"
            sx={textFieldStyle}
            required
            value={responseState.enroll}
            onChange={(e) =>
              setStudentId({ ...studentId, erId: e.target.value })
            }
          />
          <TextField
            label="Full Name"
            type="text"
            variant="outlined"
            value={responseState.name}
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStudentId({ ...studentId, name: e.target.value })
            }
          />
          <TextField
            label="Course"
            type="text"
            variant="outlined"
            sx={textFieldStyle}
            value={responseState.stream}
            required
            onChange={(e) =>
              setStudentId({ ...studentId, course: e.target.value })
            }
          />
          <TextField
            type="date"
            variant="outlined"
            sx={textFieldStyle}
            required
            value={responseState.dob}
            onChange={(e) =>
              setStudentId({ ...studentId, dob: e.target.value })
            }
          />
          <TextField
            label="Address"
            type="text"
            variant="outlined"
            sx={textFieldStyle}
            value={responseState.address}
            required
            onChange={(e) =>
              setStudentId({ ...studentId, address: e.target.value })
            }
          />
          <TextField
            label="Blood Group"
            type="text"
            variant="outlined"
            value={responseState.blood}
            sx={textFieldStyle}
            required
            onChange={(e) =>
              setStudentId({ ...studentId, blood: e.target.value })
            }
          />
          <Stack direction="row" justifyContent="space-evenly">
            {/* <Typography>Upload Profile Photo:</Typography> */}
            <Button
              variant="outlined"
              component="label"
              startIcon={<BsFillCameraFill />}
            >
              Upload
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) =>
                  setStudentId({ ...studentId, photo: e.target.files[0] })
                }
              />
            </Button>
          </Stack>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default StudentIDCreate;
