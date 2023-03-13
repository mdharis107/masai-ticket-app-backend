const { TicketModel } = require("../models/ticket.model");

const postTickets = async (req, res) => {
  const { title, category, message, userId } = req.body;

  // console.log(req.body

  const ticket = new TicketModel({
    title,
    category,
    message,
    userId,
  });
  try {
    await ticket.save();
    res.status(201).send({ msg: "Ticket has been created" });
  } catch (err) {
    console.log(err);
    // res.send(err)
    res.send({ msg: "Something went wrong" });
  }
};

const getTickets = async (req, res) => {
  const { userId } = req.params;
  let sort = req.query.sort || "createdAt";

  req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

  let sortBy = {};
  if (sort[1]) {
    sortBy[sort[0]] = sort[1];
  } else {
    sortBy[sort[0]] = "asc";
  }

  const tickets = await TicketModel.find({ userId }).sort(sortBy);

  if (tickets.length < 1) {
    res.status(501).send({ msg: "No ticket has been created yet" });
  } else {
    res.send(tickets);
  }
};

// const bookmark = () => {};

module.exports = {
  postTickets,
  getTickets,
};

// 2023-02-22T05:08:18.691Z
