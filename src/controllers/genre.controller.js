const genericCrud = require("./generic.controller");
const { genre } = require("../model");

module.exports = {
  ...genericCrud(genre),
};
