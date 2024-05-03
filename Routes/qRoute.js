const express = require("express");
const qRoute = express.Router();
const { color, payment, branch } = require("../db.js");

qRoute.get("/getColorScheme", (req, res) => {
  try {
    const scheme = parseInt(req.query.scheme);
    console.log(scheme, "scheme");
    if (!scheme) {
      return res
        .status(404)
        .json({ message: "Color scheme required in query" });
    }
    console.log("color scheme", color[0].scheme);
    // console.log("id", id);
    const clr = color.find((color) => scheme === color.scheme);
    console.log(clr, "clr");
    if (!clr) {
      return res.status(404).json({ message: "Color Not Found" });
    }
    return res.status(200).json({ Color: clr, message: "Color Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

qRoute.get("/getPaymentNumber", (req, res) => {
  try {
    const number = parseInt(req.query.number);
    // console.log("query value", req.query);
    if (!number) {
      return res
        .status(404)
        .json({ message: "Payment Number Required in query" });
    }
    const pay_Number = payment.find(
      (payment) => number === payment.payment_number
    );
    if (!pay_Number) {
      return res.status(404).json({ message: "Payment Number Not Found" });
    }
    return res.status(200).json({ message: "Payment Number Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

qRoute.get("/getBranch", (req, res) => {
  try {
    const b_pincode = parseInt(req.query.pincode);
    console.log(b_pincode, "pincode");
    if (!b_pincode) {
      return res
        .status(404)
        .json({ message: "Branch Pincode is Required in query" });
    }
    console.log("barnch pincode");
    const branch_Pincode = branch.find(
      (branch) => b_pincode === branch.pincode
    );
    console.log(branch_Pincode, "branch_Pincode");
    if (!branch_Pincode) {
      return res
        .status(404)
        .json({ message: `Branch pincode ${b_pincode} not found` });
    }
    return res
      .status(200)
      .json({ message: `Branch with pincode ${b_pincode} found` });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

// qRoute.get("/getBranch", (req, res) => {
//   try {
//     const b_pincode = parseInt(req.query.pincode);
//     if (!b_pincode) {
//       return res
//         .status(404)
//         .json({ message: "Branch Pincode is Required in query" });
//     }
//     const branch_Pincode = branch.find(
//       (branch) => b_pincode === branch.pincode
//     );
//     if (!branch_Pincode) {
//       return res
//         .status(404)
//         .json({ message: `Branch pincode ${b_pincode} not found` });
//     }
//     return res
//       .status(200)
//       .json({ message: `Branch with pincode ${b_pincode} found` });
//   } catch {
//     return res.status(500).json({ message: "Server Error" });
//   }
// });

module.exports = { qRoute };
