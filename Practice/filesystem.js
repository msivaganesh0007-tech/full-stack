import fsPromises from 'node:fs/promises';
import fs from 'node:fs';

const syncFile = 'sync_demo.txt';
const asyncFile = 'async_demo.txt';

// ==========================================
// 1. SYNCHRONOUS FILE OPERATIONS
// ==========================================
function runSynchronousOperations() {
  console.log('--- 1. Starting Synchronous Operations ---');

  try {
    // Write (creates or overwrites)
    fs.writeFileSync(syncFile, 'Hello from Sync Write!\n', 'utf8');
    console.log('[Sync] File created and written.');

    // Append
    fs.appendFileSync(syncFile, 'Adding another line synchronously.\n', 'utf8');
    console.log('[Sync] Content appended.');

    // Read
    const data = fs.readFileSync(syncFile, 'utf8');
    console.log('[Sync] File Content:\n' + data.trim());

    // Delete
    fs.unlinkSync(syncFile);
    console.log('[Sync] File deleted successfully.');
  } catch (err) {
    console.error('[Sync Error]:', err.message);
  }

  console.log('--- Synchronous Operations Finished ---\n');
}

// ==========================================
// 2. ASYNCHRONOUS FILE OPERATIONS
// ==========================================
async function runAsynchronousOperations() {
  console.log('--- 2. Starting Asynchronous Operations ---');

  try {
    // Write (creates or overwrites)
    await fsPromises.writeFile(asyncFile, 'Hello from Async Write!\n', 'utf8');
    console.log('[Async] File created and written.');

    // Append
    await fsPromises.appendFile(asyncFile, 'Adding another line asynchronously.\n', 'utf8');
    console.log('[Async] Content appended.');

    // Read
    const data = await fsPromises.readFile(asyncFile, 'utf8');
    console.log('[Async] File Content:\n' + data.trim());

    // Delete
    await fsPromises.unlink(asyncFile);
    console.log('[Async] File deleted successfully.');
  } catch (err) {
    console.error('[Async Error]:', err.message);
  }

  console.log('--- Asynchronous Operations Finished ---');
}

// ==========================================
// EXECUTION
// ==========================================
// 1. Run sync first (blocks execution line by line)
runSynchronousOperations();

// 2. Run async (non-blocking using async/await)
await runAsynchronousOperations();