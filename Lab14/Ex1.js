var fs = require('fs');

var myparser = require('body-parser');

var filename ="user_data.json"
var raw_data = fs.readFileSync(filename, 'utf-8');
var data = JSON.parse(raw_data);
console.log(data.dort.password);