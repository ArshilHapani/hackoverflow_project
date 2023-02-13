const express = require("express");
const router = express.Router();
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.post("/", async (req, res) => {
  const { eid, name, pos, dept, contact, address, dob, blood, status } = req.body;

  const changeEmployee = `UPDATE employee SET e_name='${name}',e_pos='${pos}',e_dept='${dept}',e_contact='${contact}',e_dob='${dob}',e_address='${address}',e_blood='${blood}',e_status='${status}' WHERE e_id=${eid};`;
  const isAdmin = `SELECT * FROM admin WHERE a_id='${req.user.id}'`;
  const isEmployee = `SELECT * FROM employee WHERE e_id=${req.user.id}`;

  try {
    con.query(isAdmin,(err,qres)=>{
      if(err){
        console.log(err.message);
      }else if(qres.length>0){
        con.query(changeEmployee, (err, qres) => {
          if (err) {
            console.log(err.message);
          } else if (qres) {
            console.log("Employee Changed");
            res.json({ status: "successfull" });
          }
        });
      }else{
        con.query(isEmployee,(err,qres)=>{
          if(err){
            console.log(err.message);
          }else if(qres.length>0){
            con.query(changeEmployee, (err, qres) => {
              if (err) {
                console.log(err.message);
              } else if (qres) {
                console.log("Employee Changed");
                res.json({ status: "successfull" });
              }
            });
          }
        })
      }
    })

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
