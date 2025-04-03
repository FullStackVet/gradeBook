// function to determine class avg score
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// determine letter grade
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// get class avg, student grade and output success message
function studentMsg(totalScores, studentScore) {
  // get class average
  let classAvg = getAverage(totalScores);
  // get student grade
  let studentGrade = getGrade(studentScore);
  // return proper message
  let message = "";
  if (studentGrade === "F") {
    message =
      "Class average: " +
      classAvg +
      ". Your grade: " +
      studentGrade +
      ". You failed the course.";
  } else {
    message =
      "Class average: " +
      classAvg +
      ". Your grade: " +
      studentGrade +
      ". You passed the course.";
  }
  return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
