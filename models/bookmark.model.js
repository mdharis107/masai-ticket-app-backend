const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BookmarkModel = mongoose.model("bookmark", bookmarkSchema);

module.exports = {
  BookmarkModel,
};
