const express = require("express");
const path = require("path");
const mainRouter = require("./routes/mainRouters");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

app.use(mainRouter);

