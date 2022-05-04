require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const loginRoute = require("./Routes/LoginRoutes/logres");
const session = require("cookie-session");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const cors = require("cors");
app.use(bodyParser.json());
// --------------
const cookie_parser = require("cookie-parser");
// app.use(cookie_parser(process.env.COOKIE_SECRET));
// ----------------------

app.use(cors());
app.use(express.urlencoded({ extended: false }));
/*Security*/
// app.use(helmet());
// app.use(hpp());
//-----
// app.use(
//   session({
//     name: "session",
//     secret: "secretKeyWooo",
//     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
//   })
// );

// app.use(csurf());

app.use("/user", loginRoute);

const url =
  "mongodb+srv://monk:MOWtN0RZef1bzpzF@cluster0.oqwgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongooseConnection = async () => {
  await mongoose.connect(url).then((res) => {
    console.log("connected");
  });
};
mongooseConnection().catch((err) => console.log(err));

const port = process.env.port || 8090;
app.post("/", (req, res) => {
  //   console.log(req.query.name);
  console.log(req.body);
  res.send("message received").status(404);
});
app.listen(port, () => {
  console.log("Server running on http://localhost:8090");
});
