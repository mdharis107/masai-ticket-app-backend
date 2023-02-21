const { Router } = require("express");
const { postTickets, bookmark } = require("../controllers/ticket.controller");

const TicketRouter = Router();

TicketRouter.post("/tickets", postTickets);
TicketRouter.post("/bookmark", bookmark);

module.exports = {
  TicketRouter,
};
