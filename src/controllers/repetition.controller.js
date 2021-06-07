const genericCrud = require("./generic.controller");
const { user } = require("../model");





module.exports = {
  ...genericCrud(user),
};
