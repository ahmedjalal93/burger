var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(table, rows, vals, cb) {
    orm.create(table, rows, vals, function(res) {
      cb(res);
    });
  },
  update: function(table, set, vals, row, query, cb) {
    orm.update(table, set, vals, row, query, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;