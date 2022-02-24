const express = require('express');
const wordlingoDB = require('/db');
const app = express();

// Connect Database
wordlingoDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

//http://localhost:3000/

app.listen(port, () => console.log(`Server running on port ${port}`));