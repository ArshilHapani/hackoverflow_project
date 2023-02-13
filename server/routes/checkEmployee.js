const express = require("express");
const router = express.Router();
const con = require("./database");
const authUser = require("./middleware/authUser");

router.use(authUser);

router.get("/", async (req, res) => {
  const fetchEmployee = `SELECT * FROM employee WHERE e_status='pending';`;
  const fetchAdmin = `SELECt * FROM admin WHERE a_id='${req.user.id}';`;

  console.log(req.user.id);

  try {
    con.query(fetchAdmin, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ status: "unsuccessfull" });
      } else if (qres.length > 0) {
        con.query(fetchEmployee, (err, qres) => {
          if (err) {
            console.log(err.message);
          } else if (qres) {
            res.json({ status: "successfull", employee: qres[0] });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
