const genericCrud = require("./generic.controller");
const { eventDay } = require("../model");


module.exports = {
  ...genericCrud(eventDay),
};
