const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const con = require("./routes/database");

con.connect((err, res) => {
  if (err) {
    console.log(err.msg);
  } else {
    console.log("connected");
  }
});

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/login", require("./routes/login"));

app.use("/fetchStudent", require("./routes/fetchStudent"));
app.use("/fetchEmployee", require("./routes/fetchEmployee"));

app.use("/addStudent", require("./routes/addStudent"));
app.use("/changeStudent", require("./routes/changeStudent"));
app.use("/checkStudent", require("./routes/checkStudent"));

app.use("/addEmployee", require("./routes/addEmployee"));
app.use("/changeEmployee", require("./routes/changeEmployee"));
app.use("/checkEmployee", require("./routes/checkEmployee"));

app.use("/verify", require("./routes/verifyPerson"));

app.use("/delStudent", require("./routes/delStudent"));
app.use("/delEmployee", require("./routes/delEmployee"));

const startServer = async () => {
  try {
    app.listen(port, () =>
      console.log("server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
