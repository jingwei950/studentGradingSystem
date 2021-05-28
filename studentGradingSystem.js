//Using NPM readline-sync
const rl = require('readline-sync');
//Declare an array studentResult
var studentResult = [];

//Call function Addstudent();
AddStudent();

//Function AddStudent()
function AddStudent() {
  //Create a student object once function is run
  var student = {
    name: name,
    marks: marks,
    grade: grade
  };

  //Tell the user to enter "end" to stop
  console.log("\n Type 'end' as name to stop, ");

  for (var i = 0; i <= 100; i++) {
    //Tell user to enter name
    var name = rl.question("\n Please enter your name: ");

    //If the name isn't "end"
    if (name != "end") {
      //Tell user to enter marks
      var marks = rl.question(" Enter your marks: ");
      //Use function Convert2Grade() to convert marks to grade
      var grade = Convert2Grade(marks);

      //New student
      var student = new Object();
      student.name = name;
      student.marks = marks;
      student.grade = grade;

      //Push user input into array studentResult[]
      studentResult.push({
        name: name,
        marks: marks,
        grade: grade
      });

    } else {
      //if name entered == "end"
      //If there is data in studentResult array execute BestStudent();
      if (studentResult.length > 0) {
        //Compare and display best student's name, marks and grade
        BestStudent();
      }
      //Else no data in studentResult array break
      break;
    }
  }
}

//Function BestStudent()
function BestStudent() {
  var highestGrades = studentResult.map(
    function(stud, ind) {
      // return a student's name, marks and grade
      return {
        name: stud.name,
        marks: stud.marks,
        grade: stud.grade
      };
    });

  //Sort the marks, compare and get the highest marks
  var bestStudent = highestGrades.sort(function(a, b) {
    return b.marks - a.marks;
  })[0];

  //Display highest marks' name, marks and grade
  console.log("\n" + bestStudent.name + " has the highest score of " + bestStudent.marks + " with the grade of " + bestStudent.grade);
}

//Function Convert2Grade()
function Convert2Grade(grade) {
  var hGrade = grade;
  if (hGrade < 49) {
    return hGrade = "N";
    console.log("Your grade is 'N'");
  } else if (hGrade >= 50 && hGrade <= 64) {
    return hGrade = "P";
    console.log("Your grade is 'P'");
  } else if (hGrade >= 65 && hGrade <= 74) {
    return hGrade = "C";
    console.log("Your grade is 'C'");
  } else if (hGrade >= 75 && hGrade <= 84) {
    return hGrade = "D";
    console.log("Your grade is 'D'");
  } else if (hGrade >= 85 && hGrade <= 100) {
    return hGrade = "HD";
    console.log("Your grade is 'HD'");
  } else {
    console.log("You need to enter a number less than 100, please try again.");
  }
}
