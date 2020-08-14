const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
console.log(process.env.EMAILID, process.env.PASSWORD);
let Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILID,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = Transporter;
