function getAverage(scores) {
   let sum = 0;

   for (const score of scores) {
      sum += score;
   }
   return sum / scores.length;
}

function getGrade(score) {
   if (score === 100) {
      return "A++";
   } else if (score >= 90 && score <= 99) {
      return "A";
   } else if (score >= 80 && score <= 89) {
      return "B";
   } else if (score >= 70 && score <= 79) {
      return "C";
   } else if (score >= 60 && score <= 69) {
      return "D";
   } else if (score >= 0 && score <= 59) {
      return "F";
   } else {
      return "Invalid score";
   }
}

function hasPassingGrade(score) {
   return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
   const classAverage = getAverage(totalScores);
   const studentGrade = getGrade(studentScore);
   return `Class average: ${classAverage}. Your grade: ${studentGrade}. ${hasPassingGrade(studentScore) ? 'You passed the course.' : 'You failed the course.'}`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
