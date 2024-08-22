const express = require("express");
const cors = require("cors");
const connect = require("./config/connection")
const router = require("./routes/userRouter")
const authRouter = require("./routes/authUserRouter")


const app = express();
app.use(express.json())
app.use("/auth",authRouter)
app.use(router)
app.use(cors());
connect()
const port = 4000;
app.listen(port, () => {
  console.log("This Orders project is running on port:", port);
});
