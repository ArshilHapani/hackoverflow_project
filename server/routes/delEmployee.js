const express = require("express");
const router = express.Router();
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.delete("/", (req, res) => {
  const { eid } = req.body;
  const delEmployee = `DELETE FROM employee WHERE e_id=${eid};`;
  const isAdmin = `SELECT * FROM admin WHERE a_id='${req.user.id}';`;

  try {
    con.query(isAdmin, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessfull" });
      } else if (qres.length > 0) {
        console.log("inside")
        con.query(delEmployee, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ status: "unsuccessfull" });
          } else if (qres) {
            res.json({ status: "successfull" });
          } else {
            res.json({ status: "unsuccessfull" });
          }
        });
      } else {
        res.json({ status: "unsuccessfull" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
