/**
 * File: filemanager.js
 * Description: Interactive CLI application that performs full File System (fs) operations:
 * 1. Accepts filename and initial content from user input
 * 2. Creates and writes to the file
 * 3. Reads and displays initial contents
 * 4. Appends additional user-provided content
 * 5. Reads and displays the final updated contents
 */

const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

// Setup readline interface for interactive CLI input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Helper function to convert readline.question into a Promise for clean async/await syntax.
 * @param {string} query - The prompt text displayed to the user.
 * @returns {Promise<string>} User input string.
 */
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function runFileManager() {
    console.log('====================================================');
    console.log('         NODE.JS INTERACTIVE FILE MANAGER           ');
    console.log('====================================================\n');

    try {
        // Step 1: Prompt user for filename
        let rawFilename = await askQuestion(' Enter filename (e.g., sample.txt): ');
        if (!rawFilename.trim()) {
            rawFilename = 'output.txt'; // Default fallback filename
            console.log(`  No name entered. Defaulting to: "${rawFilename}"`);
        }

        // Construct absolute file path in current directory
        const filePath = path.resolve(__dirname, rawFilename.trim());

        // Step 2: Prompt user for initial file content
        const initialContent = await askQuestion(' Enter initial content to write to file: ');

        // Step 3: Create / Write to file
        console.log('\n----------------------------------------------------');
        console.log('1. WRITING FILE...');
        await fs.writeFile(filePath, initialContent + '\n', 'utf-8');
        console.log(` File successfully created at: ${filePath}`);

        // Step 4: Read initial file contents
        console.log('\n----------------------------------------------------');
        console.log('2. READING INITIAL CONTENTS...');
        const readContent1 = await fs.readFile(filePath, 'utf-8');
        console.log(' Current File Content:');
        console.log('----------------------------------------------------');
        console.log(readContent1.trim());
        console.log('----------------------------------------------------');

        // Step 5: Prompt user for additional content to append
        const extraContent = await askQuestion('\n➕ Enter additional content to append: ');

        // Step 6: Append additional content to the file
        console.log('\n----------------------------------------------------');
        console.log('3. APPENDING CONTENT...');
        await fs.appendFile(filePath, extraContent + '\n', 'utf-8');
        console.log(' Additional content successfully appended.');

        // Step 7: Read and display final contents
        console.log('\n----------------------------------------------------');
        console.log('4. READING FINAL CONTENTS...');
        const finalContent = await fs.readFile(filePath, 'utf-8');
        console.log(' Final Updated File Content:');
        console.log('====================================================');
        console.log(finalContent.trim());
        console.log('====================================================');

    } catch (error) {
        console.error('\n An error occurred during file operation:', error.message);
    } finally {
        rl.close(); // Close terminal stream
        console.log('\n File management process completed.');
    }
}

// Execute application
runFileManager();
