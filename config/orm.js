const connection = require("./connection");

const orm = {
  selectAll: function (table_name, result) {
    connection.query("SELECT * FROM ??;", table_name, (err, res) => {
      if (err) throw err;
      result(res);
    });
  },

  insertOne: function (table_name, column_name, burger_name, result) {
    connection.query(
      "INSERT INTO ?? (??) VALUES (?)",
      [table_name, column_name, burger_name],
      (err, res) => {
        if (err) throw err;
        result(res);
      }
    );
  },

  updateOne: function (table_name, column_name, devoured, id, result) {
    connection.query(
      "UPDATE ?? SET ?? = ? WHERE id = ?",
      [table_name, column_name, devoured, id],
      (err, res) => {
        if (err) throw err;
        result(res);
      }
    );
  },
};

module.exports = orm;
