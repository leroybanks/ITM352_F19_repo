//Ex 13
var express = require('express'); // use the express module from node
var app = express(); // create an object of the express module
var myParser = require("body-parser"); // it gets the parser from node.js
var fs = require('fs'); // require file system from node
var data = require('./public/products.js'); // brings the data from products.js
var products = data.products; // products is defined from products.js

app.use(myParser.urlencoded({ extended: true }));

// Function to test if a string is a non-negative integer
function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);

}


// Initialize Express
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.use(myParser.urlencoded({ extended: true }));
// Set up the path and handler for POST requests
app.post("/process_form", function (request, response,next) {
    let POST = request.body;
    // response.send(POS)
    process_quantity_form(POST, response);

});



// Look for files in the "public" folder and listen on port 8080
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));