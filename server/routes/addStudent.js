const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.post("/", async (req, res) => {
  const { spid, name, password, stream, contact } = req.body;
  const salt = await bcrypt.genSalt(10);
  const secpass = await bcrypt.hash(password, salt);

  const findStudent = `SELECT * FROM student WHERE s_spid=${spid}`;
  const addStudent = `INSERT INTO student (s_spid,s_name,s_pwd,s_stream,s_contact) VALUES (${spid},'${name}','${secpass}','${stream}','${contact}')`;
  const fetchAdmin = `SELECt * FROM admin WHERE a_id='${req.user.id}';`;

  try {
    con.query(findStudent, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessful" });
      } else if (qres.length > 0) {
        res.json({ status: "unsuccessful", msg: "SPID is already used" });
      } else {
        con.query(fetchAdmin, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ status: "unsuccessful" });
          } else if (qres.length > 0) {
            con.query(addStudent, (err, qres) => {
              if (err) {
                console.log(err.message);
              } else if (qres) {
                console.log("Student Inserted");
                res.json({ status: "successfull" });
              }
            });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
