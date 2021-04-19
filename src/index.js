const express = require('express');
const env = require('dotenv');

const { dataRouter } = require('./routes');

env.config();
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use('/data', dataRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
