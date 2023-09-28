const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "Tushar",
      age: "23",
    },
    {
      name: "Hasan",
      age: "22",
    },
    {
      name: "Mahfuz",
      age: "23.5",
    },
    {
      name: "Shovon",
      age: "25",
    },
    {
      name: "Saba",
      age: "26",
    },
  ]);
});

module.exports = router;
