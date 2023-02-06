const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")))

app.get('/:namee', (req, res) => {
    res.send('Hello World!'+ req.params.namee);
});
app.get('/folks/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/json', (req, res) => {
    res.json({"Name": "Agnivesh", "Age": 21});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
