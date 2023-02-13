const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.post("/", async (req, res) => {
  const { eid, name, password, dept, contact } = req.body;
  const salt = await bcrypt.genSalt(10);
  const secpass = await bcrypt.hash(password, salt);

  const findEmployee = `SELECT * FROM employee WHERE e_id=${eid};`;
  const addEmployee = `INSERT INTO employee (e_id,e_name,e_pwd,e_dept,e_contact) VALUES (${eid},'${name}','${secpass}','${dept}','${contact}')`;
  const fetchAdmin = `SELECt * FROM admin WHERE a_id='${req.user.id}';`;

  try {
    con.query(findEmployee, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessful" });
      } else if (qres.length > 0) {
        res.json({
          status: "unsuccessful",
          msg: "Employee ID is already used",
        });
      } else {
        con.query(fetchAdmin, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ status: "unsuccessful" });
          } else if (qres.length > 0) {
            con.query(addEmployee, (err, qres) => {
              if (err) {
                console.log(err.message);
              } else if (qres) {
                console.log("Employee Inserted");
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
