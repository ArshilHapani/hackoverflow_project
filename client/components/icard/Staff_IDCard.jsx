import React, { Component } from "react";
import { Avatar, Card, Stack, Typography } from "@mui/material";
import { BsDropletFill } from "react-icons/bs";
import Barcode from "react-barcode";
import { useNavigate } from "react-router-dom";

const Staff_IDCard = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/staff-icard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack alignItems="center" justifyContent="center">
        <Card
          elevation={0}
          sx={{
            width: {
              xs: "90%",
              md: "50%",
            },
            border: "1px solid black",
            padding: "15px",
          }}
        >
          <Stack direction="row" gap={3}>
            <Avatar
              sx={{
                height: "60px",
                width: "60px",
              }}
            ></Avatar>
            <Stack direction="column" alignItems="center">
              <Typography fontSize={24}>SDJ International College</Typography>
              <Typography fontSize={12}>
                BBA,BCOM,BCA(Affiliated to VNSGU,Surat.)
              </Typography>
            </Stack>
          </Stack>
          <hr />
          <Stack alignItems="center">
            <Avatar
              sx={{
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
          </Stack>
          <Typography fontWeight={5} fontSize={16}>
            Dr. Sanghani Vaibhav K.
          </Typography>
          <Typography fontWeight={5} fontSize={15}>
            CEO
          </Typography>
          <Stack direction="row" gap={3}>
            <Stack direction="column" gap={1}>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                EMPLOYEE CODE{" "}
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                DEPARTMENT{" "}
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                D.O.B{" "}
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                CONTACT{" "}
              </Typography>
            </Stack>
            <Stack direction="column" gap={1}>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                {" "}
                : 11
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                {" "}
                : BCA
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                {" "}
                : 01:01:2004
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                {" "}
                : 9999999999
              </Typography>
            </Stack>
            <Typography fontSize={14} fontWeight={2} textAlign="left">
              <BsDropletFill /> B+{" "}
            </Typography>
          </Stack>
          <Typography fontSize={12} fontWeight={2} textAlign="left">
            Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. corrupti adipisicing elit. corrupti{" "}
          </Typography>
          <Stack direction="column">
            <Stack alignItems="center">
              <Barcode
                value="check"
                width="1px"
                height="30px"
                displayValue="false"
              />
            </Stack>
            <Typography fontSize={12} textAlign="right">
              Principal's Sign: _____________
            </Typography>
          </Stack>
          <hr />
          <Stack alignItems="center" direction="column">
            <Typography fontSize={12}>
              est minima.Lorem ipsum dolor sit amet perferendis mollitia,
              tempora est minima.
            </Typography>
            <Typography fontSize={12}>
              Vesu,Surat,Gujrat-395007 | Tel : +91 261 2228175
            </Typography>
          </Stack>
          <Stack direction="row" gap={5}>
            <Typography fontSize={12}>Email: abc@gmail.com</Typography>
            <Typography>|</Typography>
            <Typography fontSize={12}>WebSite : www.google.com</Typography>
          </Stack>
        </Card>
      </Stack>
    </form>
  );
};

export default Staff_IDCard;
