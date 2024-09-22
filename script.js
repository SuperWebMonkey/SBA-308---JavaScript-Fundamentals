/**
 * HW: JS Basics
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

// main function that returns an obj that contains student data
function getLearnerData(course, ag, submissions) {
  let subLen = submissions.length; // length of submissions
  let subObjLen = 0;
  let assignmentsObj = AssignmentGroup.assignments;
  let earnedPoints = 0;
  let totalPoints = getTotalPoints(ag); // get the total points from ag object
  // console.log(`The total points is ${totalPoints}`); // check if function works

  // testing out objects
  // console.log("assignment object:", assignmentsObj[0].id);
  let assignmentObjectLen = assignmentsObj.length;
  let courseIdAry = [];
  let submissionAry = [];

  // Loop over the ary of objects
  for (let i = 0; i < subLen; i++) {
    let obj = submissions[i]; // object in ary
    let objLen = Object.keys(obj).length; // length of each object
    // console.log("object length", objLen); // length

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

// get the total points
function getTotalPoints(ag) {
  let hwAry = ag.assignments;
  // console.log("hw ary: ", hwAry); // error check
  return hwAry
    .map((points) => points.points_possible)
    .reduce((total, points) => (total += points), 0);
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
function errorHandling(points_possible) {
  try {
    if (points_possible <= 0) {
      throw new Error("Points cannot be at or below 0.");
    }
  } catch (e) {
    console.log(`Cannot divide by 0 and below: ${e}`);
  } finally {
    console.log(`Error checking finished.`);
  }
}

// filter out unique keys or values
function uniqueKeys(ary, key) {
  let uniqueSet = new Set(ary.map((i) => i[key]));
  return Array.from(uniqueSet);
}

// running code
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);

// worry about points scored
// group weight isn't used for anything
// Use filter, sort or map to make it easier
