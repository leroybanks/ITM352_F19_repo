var fs = require('fs');

var myparser = require('body-parser');

var filename = "user_data.json"

//Only open the file if it exists
if (fs.existsSync(filemane)) {
    var raw_data = fs.readFileSync(filename, 'utf-8');
    var users_reg_data = JSON.parse(raw_data);
    console.log(users_reg_data);

    fs.statSync(filename);
    console.log(filename + "has" + fstats.size + "characters");
}
else {

    console.log("file" + filename + "dont exist!");

}

