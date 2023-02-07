const express = require('express');
const app = new express();

let loginDetail = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


app.get("/", (req, res) => {
    res.send("Welcome to express server!");
})

app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetail));
})

app.post("/login/:name", (req, res) => {
    loginDetail.push({ "name": req.params.name, "login time": new Date() });
    res.send(`${req.params.name}, You are logged in!`);
})

app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name)
})

// app.get("/fetchMonth/:num", (req, res) => {
//     let num = parseInt(req.params.num);
//     if (num > 0 && num <= 12) {
//         const requiredMonth = months.filter((month) => {
//             month.num == num;
//         })
//         res.send(requiredMonth[0].name);
//     } else{
//         res.send("Please enter a valid month numner.")
//     }
// })


app.get("/fetchMonth/:num", (req, res) => {
    let num = parseInt(req.params.num);
    if (num < 1 || num > 12) {
        res.send("Not a valid month number")
    } else {
        res.send(months[num - 1])
    }

})


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})
