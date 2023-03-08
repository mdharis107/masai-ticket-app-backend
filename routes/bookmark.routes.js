const { Router } = require("express");
const { postBookmark } = require("../controllers/bookmark.controller");

const BookmarkRouter = Router();

BookmarkRouter.get("/:userId");

BookmarkRouter.post("/addBookmark", postBookmark);

// BookmarkRouter.post("/bookmark", bookmark);

module.exports = {
  BookmarkRouter,
};
