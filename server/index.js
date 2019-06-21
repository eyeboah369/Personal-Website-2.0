const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express()
app.use(parser.json());
app.use(express.static(`/dist`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`./dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});