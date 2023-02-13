const express = require("express");
const router = express.Router();
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.post("/", async (req, res) => {
  const { spid, enroll, name, stream, contact, address, dob, blood, status } = req.body;
  const changeStudent = `UPDATE student SET s_enroll='${enroll}',s_name='${name}',s_stream='${stream}',s_contact='${contact}',s_dob='${dob}',s_address='${address}',s_blood='${blood}',s_status='${status}' WHERE s_spid='${spid}';`;
  const isAdmin = `SELECT * FROM admin WHERE a_id='${req.user.id}'`;
  const isEmployee = `SELECT * FROM employee WHERE e_id=${req.user.id}`;
  const isStudent = `SELECT * FROM student WHERE s_spid=${req.user.id}`;

  try {
    con.query(isAdmin, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessfull" });
      } else if (qres.length > 0) {
        con.query(changeStudent, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ status: "unsuccessfull" });
          } else if (qres) {
            res.json({ status: "successfull" });
          }
        });
      } else {
        con.query(isEmployee, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ status: "unsuccessfull" });
          } else if (qres.length > 0) {
            con.query(changeStudent, (err, qres) => {
              if (err) {
                console.log(err.message);
              } else if (qres) {
                res.json({ status: "successfull" });
              }
            });
          } else {
            con.query(isStudent, (err, qres) => {
              if (err) {
                console.log(err.message);
                res.json({ status: "unsuccessfull" });
              } else if (qres.length > 0) {
                con.query(changeStudent, (err, qres) => {
                  if (err) {
                    console.log(err.message);
                  } else if (qres) {
                    console.log("Student Changed");
                    res.json({ status: "successfull" });
                  }
                });
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
