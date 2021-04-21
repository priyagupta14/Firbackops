const express = require('express');
const env = require('dotenv');

const { dRouter } = require('./routes');

env.config();
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use('/d', dRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
