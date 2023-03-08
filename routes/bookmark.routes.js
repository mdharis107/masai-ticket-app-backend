const { Router } = require("express");

const BookmarkRouter = Router();

BookmarkRouter.get("/:userId");

BookmarkRouter.post("/addTicket");

// BookmarkRouter.post("/bookmark", bookmark);

module.exports = {
  BookmarkRouter
}; 
     