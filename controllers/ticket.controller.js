const { TicketModel } = require("../models/ticket.model");

const postTickets = async (req, res) => {
  const { title, category, message, userId } = req.body;

  // console.log(req.body)

  const ticket = new TicketModel({
    title,
    category,
    message,
    userId,
  });
  try {
    await ticket.save();
    res.send({ msg: "Ticket has been created" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong" });
  }
};

const getTickets = async (req, res) => {
  const { userId } = req.params;

  const tickets = await TicketModel.find({ userId });

  res.send(tickets);
};

const bookmark = () => {};

module.exports = {
  postTickets,
  bookmark,
  getTickets
};
