var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endpointSchema = new Schema({
    title:  String,
    url: String,
    active: Boolean
});

var Endpoint = module.exports = mongoose.model('Endpoint', endpointSchema);