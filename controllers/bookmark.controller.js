const { BookmarkModel } = require("../models/bookmark.model");

const getBookmark = () => {};

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

module.exports = { postBookmark, getBookmark };
