const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { UserRouter } = require("./routes/user.routes");
const { TicketRouter } = require("./routes/ticket.routes");
const { authentication } = require("./middlewares/authentication");
const { BookmarkRouter } = require("./routes/bookmark.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.use("/user", UserRouter);

app.use(authentication);

app.use("/tickets", TicketRouter);

app.use("/bookmarks",BookmarkRouter)   

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database");
  } catch (err) {
    console.log("Failed connecting to database");
    console.log(err);
  }
  console.log(`The port is running in ${PORT}`);
});
