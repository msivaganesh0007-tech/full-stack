// Import built-in modules
const os = require("os");
const path = require("path");
const fs = require("fs");

// -----------------------------
// OS MODULE
// -----------------------------

console.log("===== OS MODULE =====");

console.log("Operating System:",
    os.platform());

console.log("OS Type:",
    os.type());

console.log("CPU Architecture:",
    os.arch());

console.log("Total Memory:",
    os.totalmem());

console.log("Free Memory:",
    os.freemem());

console.log("Home Directory:",
    os.homedir());


// -----------------------------
// PATH MODULE
// -----------------------------

console.log("\n===== PATH MODULE =====");

const folder = "FS prac";
const file = "example.txt";

const filePath = path.join(folder, file);

console.log("Joined Path:",
    filePath);

console.log("File Name:",
    path.basename(filePath));

console.log("Directory Name:",
    path.dirname(filePath));

console.log("File Extension:",
    path.extname(filePath));


// -----------------------------
// FS MODULE
// -----------------------------

console.log("\n===== FS MODULE =====");

const newFile = "sample.txt";

fs.writeFileSync(
    newFile,
    "This file was created using the Node.js File System module."
);

console.log("File created successfully.");

const data = fs.readFileSync(
    newFile,
    "utf8"
);

console.log("File Contents:");
console.log(data);

fs.appendFileSync(
    newFile,
    "\nAdditional content added using fs module."
);

console.log("Content appended successfully.");

const finalData = fs.readFileSync(
    newFile,
    "utf8"
);

console.log("\nFinal File Contents:");
console.log(finalData);
