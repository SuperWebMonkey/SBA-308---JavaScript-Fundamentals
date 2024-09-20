/**
 * HW:
 */

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// main function where most of the code will be
function main() {}

// main function
function getLearnerData(course, ag, submissions) {
  let earnedPoints = 0;
  let totalPoints = 0;
  let subLen = submissions.length;
  let subObjLen = 0;

  // Loop over the ary of objects
  for (let i = 0; i < subLen; i++) {
    let obj = submissions[i]; // object in ary
    let objLen = Object.keys(obj).length; // length of each object
    // console.log("object length", objLen);

    for (let j = 0; j < objLen; j++) {}
  }

  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

// get the grade average across all assignments
function gradeAverage(pointsEarned, maxPoints) {
  return Math.round(pointsEarned / maxPoints, 2);
}

// compare the submission date and dueDate
function compareDate(submitDate, dueDate) {
  return submitDate > dueDate;
}

// find the point deduction
function deductPoints(totalPoints) {
  return totalPoints - 0.1 * totalPoints;
}

// error handling
function errorHandling() {}

// running code
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
