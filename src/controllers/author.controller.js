const genericCrud = require("./generic.controller");
const { Author } = require("../model");

module.exports = {
  ...genericCrud(Author),
};
