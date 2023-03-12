const { Router } = require("express");
const {
  postBookmark,
  deleteBookmark,
  getBookmark,
} = require("../controllers/bookmark.controller");

const BookmarkRouter = Router();

BookmarkRouter.get("/:userId", getBookmark);

BookmarkRouter.post("/addBookmark", postBookmark);

BookmarkRouter.delete("/remove/:ticketId", deleteBookmark);

// BookmarkRouter.post("/bookmark", bookmark);

module.exports = {
  BookmarkRouter,
}; 
