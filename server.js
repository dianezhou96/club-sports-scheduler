const express = require('express');
const app = express();
const config = require('./config.json');
const PORT = config.PORT;

app.use( "/", express.static( __dirname + "/view" ));
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
