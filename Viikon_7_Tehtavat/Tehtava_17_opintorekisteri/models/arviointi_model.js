const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Arvosana,Paivamaara,idOpintojakso, idOpiskelija) values(?,?,?,?)',
      [arviointi.Arvosana, arviointi.Paivamaara, arviointi.idOpintojakso, arviointi.idOpiskelija ],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Arvosana=?,Paivamaara=?, idOpintojakso=?, idOpiskelija=? where idArviointi=?',
      [arviointi.Arvosana, arviointi.Paivamaara, arviointi.idOpintojakso, arviointi.idOpiskelija, id],
      callback
    );
  }
};
module.exports = arviointi;