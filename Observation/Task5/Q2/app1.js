const fs = require("fs");
const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get filename from user
rl.question("Enter the filename: ", function(filename) {

    if (filename.trim() === "") {
        console.log("Filename cannot be empty.");
        rl.close();
        return;
    }

    // Get initial content
    rl.question("Enter the content to write: ", function(content) {

        const fileName = filename.endsWith(".txt")
            ? filename
            : filename + ".txt";

        // Create and write file
        fs.writeFile(fileName, content, function(err) {

            if (err) {
                console.log("Error creating file:", err);
                rl.close();
                return;
            }

            console.log("\nFile created successfully.");

            // Read file
            fs.readFile(fileName, "utf8", function(err, data) {

                if (err) {
                    console.log("Error reading file:", err);
                    rl.close();
                    return;
                }

                console.log("\nInitial File Contents:");
                console.log(data);

                // Get additional content
                rl.question("\nEnter additional content to append: ",
                    function(additionalContent) {

                    // Append content
                    fs.appendFile(
                        fileName,
                        "\n" + additionalContent,
                        function(err) {

                        if (err) {
                            console.log("Error appending content:", err);
                            rl.close();
                            return;
                        }

                        console.log("\nContent appended successfully.");

                        // Read final contents
                        fs.readFile(fileName, "utf8",
                            function(err, finalData) {

                            if (err) {
                                console.log("Error reading final file:",
                                    err);
                                rl.close();
                                return;
                            }

                            console.log("\nFinal File Contents:");
                            console.log("--------------------");
                            console.log(finalData);

                            rl.close();
                        });
                    });
                });
            });
        });
    });
});
