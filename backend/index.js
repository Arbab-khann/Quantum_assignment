const express = require("express");
const app = express();
const route = require("./userlogin/authentication");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const details = require("./mongoDB/mongoDB");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// user api routes => http://localhost:5050/user/register  and  http://localhost:5050/user/login
app.use("/user", route);

// all users login api routes
app.get("/adminData", (req, res) => {
  details
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// making delete api routes
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log("line 28 delete", id);
  const data = await details.deleteOne({ _id: id });
  res.json({ data: data });
});

// server
app.listen(5050, async () => {
  try {
    console.log("server started............");
  } catch (err) {
    console.log(`${err} in server connection`);
  }
});
