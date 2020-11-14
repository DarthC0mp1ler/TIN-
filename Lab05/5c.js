//c) Create a prototype of a student object using initializer.
// The object should contain an array with list of
// courses each student should take. Write a function creating new
// objects based on this prototype, setting their
// first and last name and id properties.

var student =
    {
        listOfCourses: ["WASD","ADSW","DWSD","WADW"]
    };


function createStudents()
{
    let students = [];
    for (let i = 0; i < 5; i++) {
        let tmpStudent = Object.create(student);
        tmpStudent.name = "name"+i;
        tmpStudent.surname = "surname"+i;
        tmpStudent.id = i;
        students.push(tmpStudent);
    }
    return students;
}

for (const st of createStudents()) {
    console.log(st.name + " " + st.surname + " " + st.id + " " + st.listOfCourses);
}
