var express = require('express');
var notebook = require('./notebook');

var service = express();

service.use(express.bodyParser());

service.post('/notebook', notebook.create);
service.post('/p_n_c_nominal_searches', notebook.searchNominalCreate);
service.get('/p_n_c_nominal_searches/:id', notebook.searchNominalRead);
service.post('/p_n_c_vehicle_searches', notebook.searchVehicleCreate);
service.get('/p_n_c_vehicle_searches/:id', notebook.searchVehicleRead);

service.use(express.static('/home/ben/Development/mobaq-data/client/'));

service.listen(3000);

console.log('listening on port 3000');