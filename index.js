const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const blogRouter = require('./routers/blogRouter');

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));


app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log("server started ...");
});
