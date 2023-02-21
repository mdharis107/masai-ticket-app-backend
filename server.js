const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { UserRouter } = require("./routes/user.routes");
const { TicketRouter } = require("./routes/ticket.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.use("/user", UserRouter);

app.use("ticket", TicketRouter);

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
