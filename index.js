const express = require("express");
const app = express();
require("dotenv").config();
const twilio = require("twilio");

const port = process.env.PORT || 6000;
const SID = process.env.SID;
const Auth_Token = process.env.Auth_Token;
const CellNo = process.env.CellNo;
const random_number = Math.floor(Math.random() * 10000);

function SendSMS() {
  const client = new twilio(SID, Auth_Token);
  return client.messages
    .create({
      body: random_number,
      from: "+12176813844",
      to: CellNo,
    })
    .then((res) => {
      console.log("message send: ");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}
SendSMS();

app.listen(port, () => {
  console.log(`server start at ${port}`);
});
