//e) Task D with classes
class Student {
    constructor(name, surname, id, grades) {
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.grades =grades;

        this.print = function ()
        {
            console.log(this.fullName + " : " + this.avgGrades);
        }
    }

    get fullName()
    {
        return this.name + " " + this.surname;

    }

    set fullName(fullName)
    {
        let words = fullName.split(' ');
        this.name = words[0] || ' ';
        this.surname = words[1] || ' ';
    }

    get avgGrades()
    {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return (sum / this.grades.length);
    }
}


let st = new Student("","",234,[5,3,3,4,5]);
st.fullName = "Ciel Phantomhive";
st.print();