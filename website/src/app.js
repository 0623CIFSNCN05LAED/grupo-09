const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cookies = require("cookie-parser");
const cors = require("cors");

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    session({
        secret: "grupo09",
        resave: false,
        saveUninitialized: false,
    })
); 

app.use(cookies());
app.use(userLoggedMiddleware);

app.use(
    cors(
        (corsOptions = {
            origin: "*",
        })
    )
);

const mainRouter = require("./routes/mainRouter");
app.use(mainRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));