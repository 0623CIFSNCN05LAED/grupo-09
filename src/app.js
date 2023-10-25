const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));



const mainRouter = require("./routes/mainRouters");
app.use(mainRouter);

const loginRouter = require("./routes/loginRouter")
app.use(loginRouter);

const registerRouter = require("./routes/registerRouter")
app.use(registerRouter);

const productCartRouter = require("./routes/productCartRouter")
app.use(productCartRouter);

const productDetailRouter = require("./routes/productDetailRouter")
app.use(productDetailRouter);

const productosRouter = require("./routes/productsRouter")
app.use(productosRouter);


