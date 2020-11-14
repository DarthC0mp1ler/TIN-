//b) Implement a constructor function,
// creating objects representing students –
// they should include first and last name, id, array with grades
// (without subject names, just grades) ,
// a method printing first and last name and grade average of a student


function Student(name, surname, id, grades)
{
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.print = function ()
    {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        console.log(this.name + " " + this.surname + " : " + (sum / this.grades.length));
    }
}


let obj1 = new Student
(
    "Ciel",
    "Phantomhive",
    12345,
    [5, 3, 3, 4, 5]
);

obj1.print();
