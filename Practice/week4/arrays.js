// 1. Using 'const' for a value that should not change
const PASSING_SCORE = 70;

// 2. Using 'let' for data that can be updated or reassigned
let studentsEvaluated = 0;

// Function using 'var' inside to demonstrate traditional scoping
function analyzeStudentScore(score) {
  // 'var' is function-scoped
  var resultMessage;

  // Using 'if...else' for conditional logic
  if (score >= PASSING_SCORE) {
    resultMessage = "PASS";
  } else {
    resultMessage = "FAIL";
  }

  return resultMessage;
}


function processScores(scoresArray) {
  console.log("=== Student Grade Report ===");

  
  for (let i = 0; i < scoresArray.length; i++) {
    const currentScore = scoresArray[i];
    const status = analyzeStudentScore(currentScore);

   
    studentsEvaluated++;

   
    if (status === "PASS") {
      console.log(`Student ${i + 1}: ${currentScore} Marks -> Status: ${status} (Great job!)`);
    } else {
      console.log(`Student ${i + 1}: ${currentScore} Marks -> Status: ${status} (Needs Improvement)`);
    }
  }

  console.log("--------------------------------");
  console.log(`Total Students Evaluated: ${studentsEvaluated}`);
}

const testScores = [85, 42, 70, 95, 68, 88];

processScores(testScores);