const express = require("express");
const path = require("path");
const mainRouter = require("./routes/mainRouters");
const app = express();


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Using port ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "../public")));


app.use(mainRouter);

 
