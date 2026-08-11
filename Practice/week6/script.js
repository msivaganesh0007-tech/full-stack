const http = require('http');
const fs = require('fs');
const path = require('path');

// ==========================================
// 1. DEFINE CUSTOM MODULES
// ==========================================

// Module A: Math Helper Functions
const MathModule = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Module B: Logger Helper Functions
const LoggerModule = {
  log: (msg) => console.log(`[LOG - ${new Date().toISOString()}]: ${msg}`),
  error: (msg) => console.error(`[ERROR - ${new Date().toISOString()}]: ${msg}`)
};

// Exporting both modules locally using module.exports
module.exports = {
  MathModule,
  LoggerModule
};

// ==========================================
// 2. CONSUME / USE THE MODULES
// ==========================================

// Destructure the modules directly
const { MathModule: math, LoggerModule: logger } = module.exports;

logger.log('Initializing application...');

// Using custom math module
const sum = math.add(15, 25);
logger.log(`15 + 25 = ${sum}`);

// ==========================================
// 3. USE A BUILT-IN CORE MODULE (HTTP)
// ==========================================

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger.log(`Received request for URL: ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      message: 'Node.js Combined Module Example',
      mathResult: `10 + 5 = ${math.add(10, 5)}`,
      timestamp: new Date()
    })
  );
});

// Start the server
server.listen(PORT, () => {
  logger.log(`Server is running at http://localhost:${PORT}/`);
});