const { Router } = require("express");
const {
  postBookmark,
  deleteBookmark,
} = require("../controllers/bookmark.controller");

const BookmarkRouter = Router();

BookmarkRouter.get("/:userId");

BookmarkRouter.post("/addBookmark", postBookmark);

BookmarkRouter.delete("/remove/:ticketId", deleteBookmark);

// BookmarkRouter.post("/bookmark", bookmark);

module.exports = {
  BookmarkRouter,
};
