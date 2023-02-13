const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("./database");

router.post("/", async (req, res) => {
  const { spid } = req.body;
  const findStudent = `SELECT * FROM student WHERE s_spid=${spid}`;
  try {
    con.query(findStudent,(err,qres)=>{
        if(err){
            console.log(err.message);
            res.json({"status":"unsuccessful"});
        }else if(qres.length>0){
            res.json({"status":"successful", student: qres[0]});
        }else{
            res.json({"status":"unsuccessful"});
        }
    })
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
