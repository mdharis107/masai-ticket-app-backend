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

const deleteBookmark = async (req, res) => {
  const { ticketId } = req.params;

  const ticket = await BookmarkModel.findByIdAndDelete({ _id:ticketId });

  if(ticket){
    res.send({msg:"Removed ticket from bookmark"})
  }
  else{
    res.status(501).send({msg:"Couldn't remove bookmark"})
  }

};

module.exports = { postBookmark, getBookmark, deleteBookmark };
