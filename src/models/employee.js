const mongoose = require("mongoose");
const validator = require("validator");
const employeeschema = new mongoose.Schema({
  Ename: { type: String, require: true },
  Mno: { type: Number, require: true },
  Address: { type: String },
  Job: { type: String, require: true },
  Deptno: { type: Number, require: true },
  Salary: { type: Number, require: true },
  Email: {
    type: String,
    require: true,
    unique: [true, "Email id is  already present "],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
});

const employee = new mongoose.model("employes", employeeschema);
module.exports = employee;
