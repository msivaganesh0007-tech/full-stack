// ==========================================
// 1. ARRAY CREATION & INITIALIZATION
// ==========================================
const studentScores = [85, 92, 67, 74, 88, 95, 58, 81];
console.log("Initial Array:", studentScores);

// ==========================================
// 2. ADDING AND REMOVING ELEMENTS
// ==========================================
studentScores.push(90);      // Add to the end
studentScores.unshift(100);  // Add to the beginning
console.log("After Push & Unshift:", studentScores);

const lastScore = studentScores.pop();     // Remove from the end
const firstScore = studentScores.shift();  // Remove from the beginning
console.log(`Removed first (${firstScore}) and last (${lastScore})`);

// ==========================================
// 3. SEARCHING & CHECKING ELEMENTS
// ==========================================
const contains74 = studentScores.includes(74); // Returns boolean
const indexOf95 = studentScores.indexOf(95);   // Returns index position
console.log("Contains 74?", contains74);
console.log("Index of score 95:", indexOf95);

// ==========================================
// 4. TRANSFORMATION & FILTERING (FUNCTIONS)
// ==========================================

// Filter: Extract passing scores (>= 70)
const passingScores = studentScores.filter(score => score >= 70);
console.log("Passing Scores (>=70):", passingScores);

// Map: Add 5 bonus points to every score
const boostedScores = studentScores.map(score => score + 5);
console.log("Boosted Scores (+5):", boostedScores);

// Reduce: Calculate total sum and average
const totalSum = studentScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalSum / studentScores.length;
console.log(`Total Sum: ${totalSum} | Average: ${averageScore.toFixed(2)}`);

// Math.max with Spread Operator: Find highest value
const highScore = Math.max(...studentScores);
console.log("Highest Score:", highScore);

// ==========================================
// 5. ITERATION & SORTING
// ==========================================
// Sort scores in ascending order
const sortedScores = [...studentScores].sort((a, b) => a - b);
console.log("Sorted Scores (Ascending):", sortedScores);

// Loop through elements
console.log("--- Individual Score Summary ---");
sortedScores.forEach((score, index) => {
  console.log(`Student #${index + 1}: ${score}`);
});