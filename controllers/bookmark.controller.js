const { BookmarkModel } = require("../models/bookmark.model");

const getBookmark = async (req, res) => {
  const { userId } = req.params;

  const tickets = await BookmarkModel.find({ userId });

  if (tickets.length < 1) {
    res.status(501).send({ msg: "No ticket has been created yet" });
  } else {
    res.send(tickets);
  }
};

const postBookmark = async (req, res) => {
  const { title, category, message, userId } = req.body;

  const ticket = new BookmarkModel({
    title,
    category,
    message,
    userId,
  });
  try {
    await ticket.save();
    res.status(201).send({ msg: "Ticket has been Bookmarked" });
  } catch (err) {
    console.log(err);
    res.status(401).send({ msg: "Something went wrong" });
  }
};

const deleteBookmark = async (req, res) => {
  // console.log(req.body);
  const { ticketId } = req.params;

  const ticket = await BookmarkModel.findOneAndDelete({
    _id: ticketId,
    userId: req.body.userId,
  });

  if (ticket) {
    res.status(201).send({ msg: "Removed ticket from bookmark" });
  } else {
    res.status(403).send({ msg: "Ticket is not there to Remove" });
  }
};

module.exports = { postBookmark, getBookmark, deleteBookmark };
