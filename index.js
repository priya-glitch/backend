const express = require("express");
const app = express();
const port = 5000 || process.env.PORT ;


const userRouter = require("./routers/userRouter");
const blogRouter = require('./routers/blogRouter');
const util = require('./routers/util');

const cors = require("cors");



app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());


app.use(express.static("./uploads"));


app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/util", util);

app.get("/", (req, res) => {
  console.log("request accepted");
  res.send("Server Online!!");
});

app.listen(port, () => {
  console.log("server started ...");
});
