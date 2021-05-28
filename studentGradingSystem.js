const rl = require('readline-sync');
var studentResult = [];
//Call function Addstudent();
AddStudent();

function AddStudent(){
    var student = {
    name: name,
    marks: marks,
    grade: grade

    };
    console.log("\n Type 'end' as name to stop, ");
  for(var i = 0; i <= 100; i++)
  {

    var name = rl.question("\n Please enter your name: ");

    if(name != "end")
    {
      var marks = rl.question("\n Enter your result: ");
      var grade = Convert2Grade(marks);

      //New student
      var student = new Object();
      student.name = name;
      student.marks = marks;
      student.grade = grade;
      //Push user input into array studentResult[]
      studentResult.push({name : name, marks : marks, grade : grade});

    }
    else{
      //if name entered == "end"
      //If there is data in studentResult array execute BestStudent();
      if(studentResult.length > 0){
        //Compare and display best student's name, marks and grade
        BestStudent();
      }
      //Else no data in studentResult array break
      break;
    }

  }
    // console.log(student);
    // console.log(studentResult);
}

function BestStudent(){
  var highestGrades = studentResult.map(
  function(stud, ind)
  {
    // return a student's name and his highest grade (1)
    return {
      name: stud.name,
      marks: stud.marks,
      grade: stud.grade
    };
  });

  var bestStudent = highestGrades.sort(function(a, b)
  {
    return b.marks - a.marks;
  })[0];

  console.log("\n" + bestStudent.name + " has the highest score of " + bestStudent.marks + " with the grade of " + bestStudent.grade);
}

function Convert2Grade(grade){
  //for(var i = 0; i < studentResult.length; i++)
  // HighestGrade();
  var hGrade = grade;
  if(hGrade < 49){
    //studentGrade.push();
    return hGrade = "N";
    console.log("Your grade is 'N'");
  }
  else if(hGrade >= 50 && hGrade <= 64){
    //studentGrade.push();
    return hGrade = "P";
    console.log("Your grade is 'P'");
  }
  else if(hGrade >= 65 && hGrade <= 74){
    //studentGrade.push();
    return hGrade = "C";
    console.log("Your grade is 'C'");
  }
  else if(hGrade >= 75 && hGrade <= 84){
    //studentGrade.push();
    return hGrade = "D";
    console.log("Your grade is 'D'");
  }
  else if(hGrade >= 85 && hGrade <= 100){
    //studentGrade.push();
    return hGrade = "HD";
    console.log("Your grade is 'HD'");
  }
  else{
    console.log("You need to enter a number less than 100, please try again.");
  }
}
