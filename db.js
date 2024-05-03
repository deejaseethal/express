const db = [
  {
    id: 1,
    name: "deeja",
    email: "deeja@gmail.com",
    password: 1234,
    pincode: 691524,
  },
  {
    id: 2,
    name: "anagha",
    email: "anagha@gmail.com",
    password: 12345,
    pincode: 691523,
  },
  {
    id: 3,
    name: "sheeja",
    email: "sheeja@gmail.com",
    password: 3425,
    pincode: 691521,
  },
];

const payment = [
  {
    payment_id: 1,
    payment_type: "visa",
    payment_number: 12345,
  },
  {
    payment_id: 2,
    payment_type: "master",
    payment_number: 12445,
  },
  {
    payment_id: 3,
    payment_type: "visa",
    payment_number: 12545,
  },
];

const color = [
  { id: "5001", type: "None", scheme: 123123 },
  { id: "5002", type: "Glazed", scheme: 126123 },
  { id: "5005", type: "Sugar", scheme: 1231123 },
  { id: "5003", type: "Chocolate", scheme: 113123 },
  { id: "5004", type: "Maple", scheme: 163123 },
];

const branch = [
  { id: "3001", branch_name: "Ayoor", pincode: 691524 },
  { id: "3002", branch_name: "Attingal", pincode: 691523 },
  { id: "3005", branch_name: "Adoor", pincode: 691521 },
  { id: "3003", branch_name: "Pathanamthitta", pincode: 691514 },
  { id: "3004", branch_name: "Mangalapuram", pincode: 691564 },
];

module.exports = { db, payment, branch, color };
