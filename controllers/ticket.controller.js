const { TicketModel } = require("../models/ticket.model");

const postTickets = async (req, res) => {
  const { title, category, message, userId } = req.body;

  const ticket = new TicketModel({
    title,
    category,
    message,
    userId,
  });
  try {
    await ticket.save();
    req.send({ msg: "Ticket has been created" });
  } catch (err) {
    console.log(err);
    req.send({ msg: "Something went wrong" });
  }
};

const bookmark = () => {};

module.exports = {
  postTickets,
  bookmark,
};
