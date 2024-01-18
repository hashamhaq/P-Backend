const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => res.send('Backend file 1st change 5001'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
