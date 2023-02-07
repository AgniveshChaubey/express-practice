const express = require('express');

const router = express.Router();

let users = [
    {
        firstName: "Kunal",
        lastName: "Panchal",
        email: "kunal@gmail.com",
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
    res.send(users);
})

router.get("/:email", (req, res) => {
    // res.send(users.filter((user) => {
    //     user.email == req.params.email;
    // }));
    // //or
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    res.send(filtered_users);
})

router.post("/", (req, res) => {
    let newUser = {
        "firstName": req.query.firstName,
        "lastName": req.query.lastName,
        "DOB": req.query.DOB,
        "email": req.query.params
    }
    users.push(newUser);
    res.send("New user " + (req.query.firstName) + " has been added!");
})

router.put("/:email", (req, res) => {
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    if (filtered_users.length > 0) {
        let filtered_user = filtered_users[0];
        let DOB = req.query.DOB;
        let firstName = req.query.firstName;
        let lastName = req.query.lastName;
        if (DOB) {
            filtered_user.DOB = DOB;
        }
        if (firstName) {
            filtered_user.firstName = firstName;
        }
        if (lastName) {
            filtered_user.lastName = lastName;
        }
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);
        res.send(`User with the email  ${email} updated.`);
    }
    else {
        res.send("Unable to find user!");
    }
});

router.delete("/:email", (req, res) => {
    res.send("5");
})

module.exports = router;