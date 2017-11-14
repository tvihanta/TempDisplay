var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//path
var pathToApp = __dirname;

var db = require('./db')

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(pathToApp + '/client/index.html');
});

function getDevices(cb){
    db.conn().query('SELECT * FROM device;', function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        ret = rows.map((row) => {
            return {id:row.id, mac: row.mac, description:row.description}
        });
        cb(ret);
    });
}

app.get('/api/devices', function(req, res) {
    getDevices(function(ret){
        res.json(ret);
    });
});

app.post('/api/devices', function(req, res) {
    console.log("POST devices");
    console.log(req.body);
    let query = 'UPDATE device SET description="'+req.body.desc+'" WHERE  device.id='+req.body.id+';'
    db.conn().query(query, function (err, result) {
        if (err) throw err;
        getDevices(function(ret){
            res.json(ret);
        });
    });
});

app.get('/api/measurements/:device', function(req, res) {
    db.conn().query('SELECT * FROM ruuvi_log where device_id='+req.params.device+';', function (err, rows, fields) {
        if (err) throw err;
        //console.log(rows);
        data = {}
        data[req.params.device] = rows
        res.json(data);
    });
});




db.connect(function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
      } else {
        console.log('mysql conn ok');
        app.listen(3000, function() {
          console.log('Listening on port 3000...')
        })
      }
});
