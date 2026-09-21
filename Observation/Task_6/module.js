/**
 * Node.js Modularity Demonstration
 * File: module.js
 * Modules Covered: os, path, fs (promises)
 */

const os = require('os');
const path = require('path');
const fs = require('fs').promises;

// ==========================================
// 1. OS MODULE FUNCTION
// ==========================================
function displaySystemInformation() {
    console.log('==========================================');
    console.log('          OPERATING SYSTEM INFO           ');
    console.log('==========================================');

    console.log(`OS Platform       : ${os.platform()}`);
    console.log(`CPU Architecture  : ${os.arch()}`);
    console.log(`CPU Cores         : ${os.cpus().length} core(s)`);

    const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const freeMemGB = (os.freemem() / (1024 ** 3)).toFixed(2);

    console.log(`Total System Memory: ${totalMemGB} GB`);
    console.log(`Free System Memory : ${freeMemGB} GB`);

    console.log(`Hostname          : ${os.hostname()}`);
    console.log(`System Uptime     : ${(os.uptime() / 3600).toFixed(2)} hours`);
    console.log(`Current User      : ${os.userInfo().username}`);
    console.log('\n');
}

// ==========================================
// 2. PATH MODULE FUNCTION
// ==========================================
function demonstratePathOperations(folderName = 'logs', fileName = 'system_report.txt') {
    console.log('==========================================');
    console.log('             PATH OPERATIONS              ');
    console.log('==========================================');

    const relativePath = path.join(folderName, fileName);
    console.log(`Cross-Platform Path : ${relativePath}`);

    // Resolve absolute path relative to the caller location
    const absolutePath = path.resolve(__dirname, relativePath);
    console.log(`Absolute System Path: ${absolutePath}`);

    console.log(`Directory Name      : ${path.dirname(absolutePath)}`);
    console.log(`File Base Name      : ${path.basename(absolutePath)}`);
    console.log(`File Extension      : ${path.extname(absolutePath)}`);
    console.log('\n');

    return absolutePath;
}

// ==========================================
// 3. FILE SYSTEM MODULE FUNCTION
// ==========================================
async function demonstrateFileSystemOperations(filePath) {
    console.log('==========================================');
    console.log('          FILE SYSTEM OPERATIONS          ');
    console.log('==========================================');

    const directoryPath = path.dirname(filePath);

    try {
        await fs.mkdir(directoryPath, { recursive: true });
        console.log(`1. Directory ensured: ${directoryPath}`);

        const initialData = `--- SYSTEM REPORT LOG ---\nGenerated on: ${new Date().toISOString()}\nOS: ${os.platform()} (${os.arch()})\n`;
        await fs.writeFile(filePath, initialData, 'utf-8');
        console.log(`2. File created and written successfully.`);

        const logEntry = `User: ${os.userInfo().username} | Memory Available: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB\n`;
        await fs.appendFile(filePath, logEntry, 'utf-8');
        console.log(`3. Additional log entry appended.`);

        console.log(`4. Reading file content...`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log('\n--- START OF FILE CONTENT ---');
        console.log(fileContent.trim());
        console.log('--- END OF FILE CONTENT ---\n');

    } catch (error) {
        console.error('An error occurred during File System operations:', error.message);
    }
}

// ==========================================
// EXPORTING MODULE FUNCTIONS
// ==========================================
module.exports = {
    displaySystemInformation,
    demonstratePathOperations,
    demonstrateFileSystemOperations
};
