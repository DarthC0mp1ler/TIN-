//d) Extend task B with getter for average grade
// property and getter and setter for student’s full name

function Student(name, surname, id, grades)
{
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.mark = grades;

    this.print = function ()
    {
        console.log(this.fullName + " : " + this.avgGrades);
    }
}



Object.defineProperty(Student, "fullName",
    {
        get: function ()
        {
            return this.name + " " + this.surname;
        },

        set: function (fullName)
        {
            let words = fullName.split(' ');
            this.name = words[0] || ' ';
            this.surname = words[1] || ' ';
        }
    }
);

Object.defineProperty(Student, "avgGrades",
    {
        get: function ()
        {
            let sum = this.grades.reduce((a, b) => a + b, 0);
            return (sum / this.grades.length);
        }
    }
);

let obj1 = new Student
(
    "", "",
    12345,
    [5, 3, 3, 4, 5]
);

console.log(obj1);

obj1.fullName = "Ciel Phantomhive" ;
obj1.print();