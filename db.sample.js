var mysql = require('mysql'),
    async = require('async')

var state = {
  pool: null,
  mode: null,
}

exports.connect = function(done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
  })

  done();
}

exports.conn = function() {
  return state.pool
}
