const express = require("express");
const idRoute = express.Router();
const { payment, color, branch } = require("../db.js");

//console.log(payment, "payment");

idRoute.get("/getSinglePayment/:id", (req, res) => {
  try {
    console.log("hii");
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(404).json({ message: "Payment ID Required" });
    }
    console.log("id", id);
    const pay = payment.find((payment) => id === payment.payment_id);
    console.log("payment", payment);
    if (!pay) {
      return res.status(404).json({ message: "payment Not Found" });
    }
    return res.status(200).json({ payment: pay, message: "payment Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

idRoute.get("/getSingle/:id", (req, res) => {
  try {
    console.log("hii");
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(404).json({ message: "Payment ID Required" });
    }
    console.log("id", id);
    const pay = payment.find((payment) => id === payment.payment_id);
    console.log("payment", payment);
    if (!pay) {
      return res.status(404).json({ message: "payment Not Found" });
    }
    return res.status(200).json({ payment: pay, message: "payment Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

idRoute.get("/getSingleColor/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Color ID Required" });
    }
    // console.log("color id", color[0].id);
    // console.log("id", id);
    const clr = color.find((color) => id === color.id);
    console.log(clr, "clr");
    if (!clr) {
      return res.status(404).json({ message: "Color Not Found" });
    }
    return res.status(200).json({ Color: clr, message: "Color Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

idRoute.get("/getSingleBranch/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Branch ID Required" });
    }
    // console.log("color id", color[0].id);
    // console.log("id", id);
    const Branch = branch.find((branch) => id === branch.id);
    // console.log(clr, "clr");
    if (!Branch) {
      return res.status(404).json({ message: "Branch Not Found" });
    }
    return res.status(200).json({ Branch: Branch, message: "Branch Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = { idRoute };
