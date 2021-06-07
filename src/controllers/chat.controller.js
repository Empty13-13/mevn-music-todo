const genericCrud = require("./generic.controller");
const { chat } = require("../model");

module.exports = {
   ...genericCrud(chat),
};
