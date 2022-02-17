"use strict";

const boostrap = require("./bootstrap");
const sync = require("./sync");

module.exports = {
  async bootstrap() {
    await sync();
    await boostrap();
  },
};
