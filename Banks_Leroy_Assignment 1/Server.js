var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs = require('fs');
var data = require('./product_data.js');
var products = data.products;


function isNonNegInt(q, sendArrayBack = false) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}

function process_quantity_form(POST, response) {
    let model = products[0]['model'];
    let model_price = products[0]['price'];
    if (typeof POST['quantity_textbox'] != 'undefined')
        q = POST['quantity_textbox'];
    if (isNonNegInt(q)) {
        var contents = fs.readFileSync('./Views/display_quanity_template.view', 'utf8');
        response.send(eval('`' + contents + '`')); // render template string
    }
    else {
        response.send(`${q} is not a quantity! press the back button and try again.`);
    }
}

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});

app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
    let POST = request.body;
    //response.send(POST); 
    process_quantity_form(POST, response)

});

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));
