// const express = require("express");
// const router = express.Router();
// const user = require("../../Models/users");
// const bcrypt = require("bcrypt");
// router.post("/login", (req, res) => {
//   user.findOne(
//     {
//       name: req.body.name,
//     },
//     (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       if (data) {
//         console.log(data);
//         bcrypt.compare(
//           req.body.password,
//           data.password,
//           function (err, result) {
//             if (err) {
//               res.status(404).send({ errr: "invalid Credentials" });
//             }
//             if (result) {
//               res.status(200).send("user Verified");
//             } else {
//               res.status(404).send({ errr: "invalid Credentials" });
//             }
//           }
//         );
//       }
//     }
//   );
// });
// router.post("/register", (req, res) => {
//   user.findOne({ phone: req.body.phone }, async (err, p) => {
//     if (err) {
//       console.error(err);
//     }
//     if (p) {
//       res.status(404).send("user Exists");
//     } else {
//       bcrypt
//         .hash(req.body.password, 10)
//         .then(async (hash) => {
//           const newUser = new user({
//             name: req.body.name,
//             phone: req.body.phone,
//             password: hash,
//           });
//           await newUser.save();
//         })
//         .catch((err) => console.log(err));

//       res.status(200).send("user created");
//     }
//   });
// });

// module.exports = router;
