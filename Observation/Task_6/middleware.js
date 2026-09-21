/**
 * File: middleware.js
 * Description: Demonstrates Express.js middleware concepts including application-level
 * request logging, body-parsing, route-level middleware, and error handling.
 */

const express = require('express');
const app = express();
const PORT = 3000;

// ============================================================================
// 1. BUILT-IN MIDDLEWARE
// ============================================================================
// Parses incoming requests with JSON payloads (attaches parsed data to req.body)
app.use(express.json());

// ============================================================================
// 2. CUSTOM APPLICATION-LEVEL LOGGING MIDDLEWARE
// ============================================================================
/**
 * Logs details about every incoming HTTP request:
 * - HTTP Method (GET, POST, etc.)
 * - Request URL
 * - Time taken to process the request (in milliseconds)
 */
const requestLogger = (req, res, next) => {
    const start = Date.now();
    const timestamp = new Date().toISOString();
    const { method, url } = req;

    // Listen for the 'finish' event on the response object to calculate execution time
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${timestamp}] ${method} ${url} | Status: ${res.statusCode} | Duration: ${duration}ms`);
    });

    // Pass control to the next middleware or route handler in the pipeline
    next();
};

// Apply the logging middleware globally to all routes
app.use(requestLogger);

// ============================================================================
// 3. ROUTE-LEVEL MIDDLEWARE (VALIDATION EXAMPLE)
// ============================================================================
/**
 * Custom middleware function that restricts access unless an 'authorization' header is present.
 */
const checkAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        // End request-response cycle early if unauthenticated
        return res.status(401).json({ error: 'Unauthorized: Missing Authorization Header' });
    }

    // Proceed if authorization header is provided
    next();
};

// ============================================================================
// 4. ROUTE HANDLERS
// ============================================================================

// Public Route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Middleware Demonstration API!');
});

// Protected Route (Applies 'checkAuth' route-level middleware)
app.get('/api/protected', checkAuth, (req, res) => {
    res.json({ message: 'Access granted to protected route!' });
});

// POST Route demonstrating JSON parsing via built-in middleware
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    res.status(201).json({
        message: 'Data processed successfully',
        payload: receivedData
    });
});

// Route designed to trigger an error
app.get('/api/error', (req, res, next) => {
    const err = new Error('Something went wrong internally!');
    next(err); // Passing an argument to next() triggers error-handling middleware
});

// ============================================================================
// 5. ERROR-HANDLING MIDDLEWARE
// ============================================================================
/**
 * Error-handling middleware functions take FOUR arguments: (err, req, res, next)
 */
app.use((err, req, res, next) => {
    console.error(`❌ Error Occurred: ${err.message}`);
    res.status(500).json({
        error: 'Internal Server Error',
        details: err.message
    });
});

// ============================================================================
// SERVER INITIALIZATION
// ============================================================================
app.listen(PORT, () => {
    console.log(`\n🚀 Express Server running at http://localhost:${PORT}`);
    console.log(`📝 Request logger middleware active. Listening for requests...\n`);
});
