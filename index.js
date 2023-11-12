const express = require('express');
const app = express();
const path = require('path');
const port = 6006;

// settings
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});