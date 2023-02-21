const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
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

const TicketModel = mongoose.model("ticket", ticketSchema);

module.exports = {
  TicketModel,
};
