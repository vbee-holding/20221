const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/db.js');
const mainRoute = require("./server/routes/index.js");

const app = express();
const PORT = process.env.PORT || 3300;

app.use(bodyParser.json());
app.use(mainRoute);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req, res) => {
    res.send(`Listening on ${ PORT }`);
})
