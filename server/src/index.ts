import express from "express";
import UserRoute from "./API/modules/Users/UsersRoute";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use("/api/users", UserRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
