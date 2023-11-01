require("./config/db");
const app = require("express")();
const port = 5000;
const UserRouter = require("./api/User");
const cors = require("cors");

const bodyParser = require("express").json;
app.use(bodyParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
