const { Router } = require("express");
const {
  postTickets,
  bookmark,
  getTickets,
} = require("../controllers/ticket.controller");

const TicketRouter = Router();

TicketRouter.get("/:userId", getTickets);

TicketRouter.post("/addTicket", postTickets);

// TicketRouter.post("/bookmark", bookmark);

module.exports = {
  TicketRouter,
}; 
     