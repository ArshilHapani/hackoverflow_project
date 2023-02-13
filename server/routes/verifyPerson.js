const express = require("express");
const router = express.Router();
const con = require("./database");

router.post("/", async (req, res) => {
  const { person, spid, eid } = req.body;
  const changeStudent = `UPDATE ${person} SET ${spid?"s_status='verified' WHERE s_spid="+spid:""}${eid?"e_status='verified' WHERE e_id="+eid:""};`;
  console.log(changeStudent);
  try {
    con.query(changeStudent, (err, qres) => {
      if (err) {
        console.log(err.message);
      } else if (qres) {
        console.log("Status Changed");
        res.json({ status: "successfull" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
