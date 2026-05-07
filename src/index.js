const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('<h1>Express on GCP</h1><p>Welcome to GCP Final Project</p>');
});
app.listen(port, () => console.log(`Server has started on port ${port}!`));
