const express = require("express");
const router = express.Router();
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.delete("/", (req, res) => {
  const { spid } = req.body;

  const delStudent = `DELETE FROM student WHERE S_SPID=${spid}`;
  const isAdmin = `SELECT * FROM admin WHERE a_id='${req.user.id}'`;
  const isEmployee = `SELECT * FROM employee WHERE e_id=${req.user.id}`;

  try {
    con.query(isAdmin, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessfull" });
      } else if (qres.length > 0) {
        con.query(delStudent, (err, qres) => {
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
            con.query(delStudent, (err, qres) => {
              if (err) {
                console.log(err.message);
                res.json({ status: "unsuccesfull" });
              } else if (qres) {
                res.json({ status: "succesfull" });
              } else {
                res.json({ status: "unsuccessfull" });
              }
            });
          } else {
            res.json({ status: "unsuccessfull" });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
