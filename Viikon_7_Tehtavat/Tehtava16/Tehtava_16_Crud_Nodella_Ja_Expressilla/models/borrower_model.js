const db = require('../database');

const borrower = {
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (fname,lname,Address) values(?,?,?)',
      [borrower.fname, borrower.lname, borrower.Address],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  update: function(id, borrower, callback) {
    return db.query(
      'update borrower set fname=?,lname=?, Address=? where id_borrower=?',
      [borrower.fname, borrower.lname, borrower.Address, id],
      callback
    );
  }
};
module.exports = borrower;