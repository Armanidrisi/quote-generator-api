const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/quotes",require('./routes/quotes'));

app.listen(PORT, () => {
  console.log(`Listening On port ${PORT}`);
});
