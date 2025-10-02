const fs = require("fs");

fs.writeFile("./file2.txt", "Xogtaan waxaan Rabaa in ay Ka soo Muuqato File1", (error) => {
    if (error) throw error;
    console.log("Xogtaan waa la save gareye");
});
