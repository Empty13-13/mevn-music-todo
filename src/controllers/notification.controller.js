const genericCrud = require("./generic.controller");
const { notification } = require("../model");


module.exports = {
  ...genericCrud(notification),
};
