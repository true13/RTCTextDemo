'use strict'

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');

var port = 19200;

app.listen(port, () => console.log("app start: " + port))
app.use('/', express.static(path.join(__dirname)))
router.use('/', (req, res) => res.sendFile('/index.html'))
