

const fs = require("fs");

fs.readFile("./file1.txt", (err, info) => {
    if (err) throw err;
    console.log(info.toString());
});


//Ku Qor File
