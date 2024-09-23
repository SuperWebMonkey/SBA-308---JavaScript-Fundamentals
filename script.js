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
  let hwAry = AssignmentGroup.assignments;
  let earnedPoints = 0;
  let totalPoints = getTotalPoints(ag); // get the total points from ag object
  // console.log(`The total points is ${totalPoints}`); // check if function works

  // testing out objects
  const resultAry = [];
  const agaLen = hwAry.length; // length of the asignments

  // sorting the array
  submissions.sort((a, b) => a.LearnerSubmissions - b.LearnerSubmissions);
  // console.log("submissions", submissions);

  // Loop over the ary of objects
  const simpleObj = {};
  for (let i = 0; i < subLen; i++) {
    const subObj = submissions[i]; // object in ary
    let studId = subObj.learner_id;
    let subDate = subObj.submission.submitted_at;
    let studScore = subObj.submission.score;
    let sub_id = subObj.assignment_id;
    console.log(
      `Student Id: ${studId}, ` +
        `id: ${sub_id},submission date:${subDate}, student score: ${studScore}`
    );
    let sameValue = true;
    let onTime = true;

    // error check

    let j = 0;
    while (j < agaLen) {
      let pointsPossible = hwAry[j].points_possible;
      const dueDate = hwAry[j].due_at;
      const hw_id = hwAry[j].id;
      // console.log(hw_id);

      // error checking

      j++;
    }
  }

  // here, we would process this data to achieve the desired result.
  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0, // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833, // late: (140 - 15) / 150
  //   },
  // ];

  return resultAry;
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
  return 0.1 * totalPoints;
}

// error handling
function errorHandling(points_possible) {
  let all_good = true;
  try {
    if (typeof points_possible !== "number" || Number.isNaN(points_possible)) {
      throw new Error("Points must be a number.");
    }
    if (points_possible <= 0) {
      throw new Error("Points cannot be at or below 0.");
    }
  } catch (e) {
    all_good = false;
    console.log(`The error: ${e}`);
  } finally {
    if (!all_good) {
      console.log("Error found.");
    }
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
