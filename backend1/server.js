const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

//routes
const CartsRouter = require("./routes/CartsRoute");
const dumpRouter = require("./routes/dumpRoute");
const UsersRouter = require("./routes/UsersRoute");
const ClothesRouter = require("./routes/ClothesRoute");
const SizesRouter = require("./routes/SizesRoute");
const ColorsRouter = require("./routes/ColorsRoute");
const CategoriesRouter = require("./routes/CategoriesRoute");

app.use("/carts", CartsRouter);
app.use("/users", UsersRouter);
app.use("/dump", dumpRouter);
app.use("/clothes", ClothesRouter);
app.use("/sizes", SizesRouter);
app.use("/colors", ColorsRouter);
app.use("/categories", CategoriesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
