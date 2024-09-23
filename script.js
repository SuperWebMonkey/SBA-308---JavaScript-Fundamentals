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
  const agaLen = hwAry.length; // length of the asignments

  // sorting the array
  submissions.sort((a, b) => a.LearnerSubmissions - b.LearnerSubmissions);
  // console.log("submissions", submissions);

  // Loop overing the ary of objects
  // variables used for the loop
  const resultAry = [];
  let simpleObj = {};
  let earnedPoints = 0;
  let totalPoints = 0;
  let trackHwAry = []; // keep track of hw id and avg score of a single test
  let hwObj = {}; // track the obj

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
    let onTime = true;

    // error check

    let j = 0;
    let nextIsSame =
      i + 1 !== submissions.length &&
      subObj.learner_id === submissions[i + 1].learner_id
        ? true
        : false;
    console.log(nextIsSame);

    while (j < agaLen) {
      let pointsPossible = hwAry[j].points_possible;
      const dueDate = hwAry[j].due_at;
      const hw_id = hwAry[j].id;

      // error checking - use continues

      let sameId = sub_id === hw_id;
      if (sameId) {
        // console.log(
        //   "scores: ",
        //   studScore,
        //   pointsPossible,
        //   studScore / pointsPossible
        // );
        hwObj[hw_id] = gradeAverage(studScore, pointsPossible);
        trackHwAry.push(hwObj);
        console.log(trackHwAry);

        // Check if the next value is the same id, otherwise add points and zero out for the next id
        if (nextIsSame) {
          earnedPoints += studScore;
          totalPoints += pointsPossible;
        } else {
          earnedPoints += studScore;
          totalPoints += pointsPossible;
          // Creating object and putting it into the result ary
          console.log(earnedPoints, totalPoints);
          const average = gradeAverage(earnedPoints, totalPoints);
          // console.log("average is", average);

          simpleObj = {
            id: studId,
            avg: average,
          };

          let updateObj = {
            ...simpleObj,
            ...trackHwAry.reduce((key, value) => ({ ...key, ...value }), {}),
          };

          console.log("update obj", updateObj);

          resultAry.push(updateObj);
          // zeroing out values for the next student
          earnedPoints = 0;
          totalPoints = 0;
          simpleObj = {};
          hwObj = {};
          trackHwAry = [];
        }
        break;
      }

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

// get the grade average across all assignments
function gradeAverage(pointsEarned, maxPoints) {
  // console.log("average is", pointsEarned / maxPoints);
  let avg = pointsEarned / maxPoints;
  return Math.round(avg * 1000) / 1000;
}

// compare the submission date and dueDate
function compareDate(submitDate, dueDate) {
  return submitDate > dueDate;
}

// find the point deduction
function deductPoints(days_late, totalPoints) {
  return 0.1 * totalPoints * days_late;
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

// running code
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

// worry about points scored
// group weight isn't used for anything
// Use filter, sort or map to make it easier
