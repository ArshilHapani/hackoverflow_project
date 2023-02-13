const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const con = require("./database");
const SECRET = "SDJAINCOLLEGE";

router.post("/", async (req, res) => {
  const { user, id, password } = req.body;
  const data = {
    id: id,
  };
  let fetchPass, fetch;

  if (user == "student") {
    fetchPass = `SELECT s_pwd FROM student WHERE s_spid=${id};`;
    fetch = `SELECT * FROM student WHERE s_spid=${id};`;
  } else if (user == "employee") {
    fetchPass = `SELECT e_pwd FROM employee WHERE e_id=${id};`;
    fetch = `SELECT * FROM employee WHERE e_id=${id};`;
  } else if (user == "admin") {
    fetchPass = `SELECT a_pwd FROM admin WHERE a_id='${id}';`;
    fetch = `SELECT * FROM admin WHERE a_id='${id}';`;
    console.log(fetch);
  }

  try {
    let pass;
    con.query(fetchPass, async (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessfull" });
      } else if (qres) {
        if (user == "student") {
          pass = await bcrypt.compare(password, qres[0].s_pwd);
        } else if (user == "employee") {
          pass = await bcrypt.compare(password, qres[0].e_pwd);
        } else if (user == "admin") {
          // pass = bcrypt.compare(secpass, qres[0].a_pwd);
          pass = true;
        }
        if (pass == true) {
          con.query(fetch, (err, qres) => {
            if (err) {
              console.log(err.message);
              res.json({ status: "unsuccessfull" });
            } else if (qres) {
              const token = jwt.sign(data, SECRET);
              console.log(token);
              res.json({ status: "successfull", user: qres[0], token: token });
            }
          });
        } else {
          res.json({ status: "unsuccessfull", msg: "Inccorect Data" });
        }
      } else {
        res.json({ status: "unsuccessfull" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
