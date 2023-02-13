const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("./database");

router.post("/", async (req, res) => {
  const { eid } = req.body;
  const findEmployee = `SELECT * FROM employee WHERE e_id=${eid}`;
  try {
    con.query(findEmployee,(err,qres)=>{
        if(err){
            console.log(err.message);
            res.json({"status":"unsuccessful"});
        }else if(qres.length>0){
            res.json({"status":"successful", Employee: qres[0]});
        }else{
            res.json({"status":"unsuccessful"});
        }
    })
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
