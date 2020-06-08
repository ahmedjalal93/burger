// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  all: function(table, cb) {
    connection.query("select * from ??", [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, rows, vals, cb) {
    connection.query("insert into ?? (??) values (?)", [table, rows, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update:function(table, set, value, row, query, cb){
    connection.query("update ?? set ?? = ? where ?? = ?", [table, set, value, row, query], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
