const express = require('express');

const router = express.Router();

let users = [
    {
        firstName: "Raj",
        lastName: "Panchal",
        email: "raj@gmail.com",
        DOB: "22-01-1999"
    },
    {
        firstName: "Raj",
        lastName: "Panchal",
        email: "raj@gmail.com",
        DOB: "22-01-1999"
    },
    {
        firstName: "Avinash",
        lastName: "Sharma",
        email: "avinash@gmail.com",
        DOB: "02-1-1999"
    },
    {
        firstName: "Kapil",
        lastName: "Giri",
        email: "kapil@gmail.com",
        DOB: "11-09-2002"
    },
    {
        firstName: "Priyansh",
        lastName: "Kumar",
        email: "priyansh@gmail.com",
        DOB: "30-08-2000"
    },
]

router.get("/", (req, res) => {
    res.send("1");
})

router.get("/:email", (req, res) => {
    res.send("2");
})

router.post("/", (req, res) => {
    res.send("3");
})

router.put("/:email", (req, res) => {
    res.send("4");
})

router.delete("/:email", (req, res) => {
    res.send("5");
})

module.exports = router;