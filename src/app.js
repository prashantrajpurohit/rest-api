const express = require("express");
require("./db/conn");
const user = require("./models/users");
const employee = require("./models/employee");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
// Create new user
app.post("/users", (req, res) => {
  // console.log(req.body);
  //   const user1 = new user(req.send);
  const users = new user(req.body);
  res.send(users);
  users.save();
});

//get all data
app.get("/users", async (req, res) => {
  try {
    const usersdata = await user.find();
    res.send(usersdata);
  } catch (e) {
    res.send(e);
  }
});

//get by id
app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userdata = await user.findById(_id);
    res.send(userdata);
  } catch (e) {
    res.send(e);
  }
});

//update  user data
app.patch("/users/:id", async (re, res) => {
  try {
    const _id = re.params.id;
    const userdata = await user.findByIdAndUpdate(_id, re.body);
    res.send(userdata);
  } catch (e) {
    res.status(500).send(e);
  }
});
//delete user data
app.delete("/users/:id", async (re, res) => {
  try {
    const _id = re.params.id;
    const userdata = await user.findByIdAndDelete(_id, re.body);
    res.send(userdata);
  } catch (e) {
    res.status(500).send(e);
  }
});

//create new employee
app.post("/employee", (req, res) => {
  const employees = new employee(req.body);
  res.send(employees);
  employees.save();
});

//get all employee
app.get("/employee", async (req, res) => {
  try {
    const employeedata = await employee.find();
    res.send(employeedata);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get by id
app.get("/employee/:id", async (req, res) => {
  try {
    const employeebyid = await employee.findById(req.params.id);
    res.send(employeebyid);
  } catch (e) {
    res.status(400).send(e);
  }
});

//update employee data
app.patch("employee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const employeeupdate = await employee.findByIdAndUpdate(_id, req.body);
    res.send(employeeupdate);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`Connection is setup ${port}`);
});
