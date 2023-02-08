const express = require('express');

const router = express.Router();

var friends = {
    "johnsmith@gamil.com": { "firstName": "John", "lastName": "Doe", "DOB": "22-12-1990" },
    "annasmith@gamil.com": { "firstName": "Anna", "lastName": "smith", "DOB": "02-07-1983" },
    "peterjones@gamil.com": { "firstName": "Peter", "lastName": "Jones", "DOB": "21-03-1989" }
};

router.get("/", (req, res) => {
    res.send(JSON.stringify(friends, null, 4));
});

router.get("/:email", (req, res) => {
    const email = req.params.email;
    res.send(friends[email]);
});

router.post("/", (req, res) => {
    if (req, body.email) {
        friends[req.body.email] = {
            "firstName": req.body.firstName,
            "lastname": req.body.lastName,
            "DOB": req.body.DOB
        }
    }
    res.send(`The user ${req.body.firstName} has been added!`);
});

router.put("/:email", (req, res) => {
    const email = req.params.email;
    let friend = friends[email];
    if (friend) {
        let DOB = req.body.DOB;
        let firstName = req.params.firstName;
        let lastName = req.params.lastName;
        if (DOB) {
            friend["DOB"] = DOB;
        }
        if (firstName) {
            friend["firstName"] = firstName;
        }
        if (lastname) {
            friend["lastName"] = lastName;
        }
        friends[email] = friend;
        res.send(`Friend with the rmail ${email} updated.`);
    }
    else {
        res.send("Unable ti find friend!")
    }
});

router.delete("/:email", (req, res)=>{
    const email = req.params.email;
    if(email){
        delete friends[email];
    }
    res.send(`Friend with the email ${email} deleted!`);
});