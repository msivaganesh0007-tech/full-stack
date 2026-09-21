/**
 * File: npm.js
 * Description: Demonstrates Node Package Manager (NPM) concepts, package.json
 * inspection, dependency checking, and consuming external packages (axios).
 */

const fs = require('fs');
const path = require('path');

// Define path to package.json in the current working directory
const packageJsonPath = path.join(__dirname, 'package.json');

// ==========================================
// 1. DEMONSTRATING PACKAGE.JSON MANAGEMENT
// ==========================================
function inspectPackageManifest() {
    console.log('==========================================');
    console.log('        NPM & PACKAGE.JSON INSPECTOR       ');
    console.log('==========================================');

    // Check if package.json exists in current folder
    if (!fs.existsSync(packageJsonPath)) {
        console.log('  No package.json found. Creating a default manifest...');
        
        const defaultManifest = {
            name: "npm-demo-app",
            version: "1.0.0",
            description: "A single-file demonstration of NPM and package management in Node.js",
            main: "npm.js",
            scripts: {
                start: "node npm.js"
            },
            dependencies: {},
            devDependencies: {}
        };

        fs.writeFileSync(packageJsonPath, JSON.stringify(defaultManifest, null, 2), 'utf-8');
        console.log(' Created package.json successfully.\n');
    }

    // Read and parse package.json
    try {
        const rawData = fs.readFileSync(packageJsonPath, 'utf-8');
        const manifest = JSON.parse(rawData);

        console.log(` Project Name        : ${manifest.name || 'N/A'}`);
        console.log(`  Version             : ${manifest.version || 'N/A'}`);
        console.log(` Entry Point (main)  : ${manifest.main || 'N/A'}`);
        console.log(` Description         : ${manifest.description || 'N/A'}`);
        
        console.log('\n--- Defined Dependencies ---');
        console.log('Production (dependencies)   :', manifest.dependencies ? Object.keys(manifest.dependencies) : 'None');
        console.log('Development (devDependencies):', manifest.devDependencies ? Object.keys(manifest.devDependencies) : 'None');
        console.log('\n');

    } catch (error) {
        console.error(' Error parsing package.json:', error.message);
    }
}

// ==========================================
// 2. EXTERNAL PACKAGE CONSUMPTION (AXIOS)
// ==========================================
async function fetchExternalData() {
    console.log('==========================================');
    console.log('      CONSUMING EXTERNAL PACKAGE (AXIOS)   ');
    console.log('==========================================');

    try {
        // Attempt to dynamically require 'axios'
        const axios = require('axios');
        
        console.log('🌐 Making an HTTP GET request using installed "axios" package...\n');
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        const user = response.data;

        console.log(' Response Received Successfully:');
        console.log(`• ID      : ${user.id}`);
        console.log(`• Name    : ${user.name}`);
        console.log(`• Email   : ${user.email}`);
        console.log(`• Company : ${user.company.name}`);
        console.log(`• City    : ${user.address.city}`);

    } catch (error) {
        if (error.code === 'MODULE_NOT_FOUND') {
            console.log(' Package "axios" is not installed in this environment!');
            console.log('\n To resolve this error and make this part of the script work:');
            console.log('1. Run: npm install axios');
            console.log('2. Re-run: node npm.js\n');
        } else {
            console.error(' HTTP Request failed:', error.message);
        }
    }
}

// ==========================================
// MAIN EXECUTION FLOW
// ==========================================
async function main() {
    // Step 1: Inspect or generate package.json
    inspectPackageManifest();

    // Step 2: Test external package invocation
    await fetchExternalData();
}

// Run the application
main();
