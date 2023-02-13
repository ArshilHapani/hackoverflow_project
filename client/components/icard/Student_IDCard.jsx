import React, { Component } from "react";
import { Avatar, Card, Stack, Typography } from "@mui/material";
import { BsDropletFill } from "react-icons/bs";

export class Student_IDCard extends Component {
  render() {
    return (
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
              src="https://storage.googleapis.com/ezap-prod/colleges/6346/sdj-international-college-surat-logo.jpg"
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
            Sanghani Vaibhav K.
          </Typography>
          <Stack direction="row" gap={3}>
            <Stack direction="column" gap={1}>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                ENROLLMENT{" "}
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                SPID{" "}
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                COURSE{" "}
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
                : 206120316015
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                {" "}
                : 12345678
              </Typography>
              <Typography fontSize={14} fontWeight={2} textAlign="left">
                {" "}
                : SYBCA
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
          <br />
          <Stack direction="row" gap={9}>
            <Typography fontSize={12}>Valid Up to: Jan,2023</Typography>
            <Stack direction="row">
              <Typography fontSize={12}>
                Director's Sign: _____________
              </Typography>
            </Stack>
          </Stack>
          <hr />
          <Stack alignItems="center" direction="column">
            <Typography fontSize={12}>
              Lorem ipsum dolor sit amet perferendis mollitia, est minima.Lorem
              ipsum dolor sit amet perferendis mollitia, tempora est minima.
            </Typography>
            <Typography fontSize={12}>Vesu,Surat,Gujrat-395007</Typography>
            <Typography fontSize={12}>Tel : +91 261 2228175</Typography>
          </Stack>
          <Stack direction="row" gap={10}>
            <Typography fontSize={12}>Email: abc@gmail.com</Typography>
            <Typography fontSize={12}>WebSite : www.google.com</Typography>
          </Stack>
        </Card>
      </Stack>
    );
  }
}

export default Student_IDCard;
