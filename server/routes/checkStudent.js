const express = require('express');
const router = express.Router();
const con = require('./database');
const authUser = require('./middleware/authUser');

router.use(authUser);

router.get('/',async(req,res)=>{

    const fetchStudent = `SELECT * FROM student WHERE s_status='pending';`;
    const fetchAdmin = `SELECT * FROM admin WHERE a_id='${req.user.id}';`;
    
    try{
        con.query(fetchAdmin, (err,qres)=>{
            if(err){
                console.log(err.message);
                res.json({"status":"unsuccesfull"});
            }else if(qres.length>0){
                con.query(fetchStudent, (err,qres)=>{
                    if(err){
                        console.log(err.message);
                        res.json({"status":"unsuccesfull"});
                    }else if(qres){
                        res.json({"status":"successfull", "students":qres[0]});
                    }
                })
            }
        })
    }catch(error){
        console.log(error);
    }
})

module.exports = router;