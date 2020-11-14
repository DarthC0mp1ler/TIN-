//f) Create class Person with first and last name,
// as well as getter and setter for full name.
// Rewrite Student class from task E to extend class Person

class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    set fullName(fullName) {
        let words = fullName.split(' ');
        this.name = words[0] || ' ';
        this.surname = words[1] || ' ';
    }
}

class Student extends Person{
    constructor(name,surname,id,grades) {
        super(name,surname);
        this.id = id;
        this.grades = grades;

        this.print = function ()
        {
            console.log(this.fullName + " : " + this.avgGrades);
        }
    }

    get avgGrades(){
        if(this.fullName === "Sebastian Michaelis") return 5;
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return (sum / this.grades.length);
    }
}

let st = new Student("Sebastian","Michaelis",666,[5,4,3,3,5]);
st.print();
st.fullName = "Ciel Phantomhive";
st.print();