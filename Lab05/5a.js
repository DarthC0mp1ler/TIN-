//a) Use object initializer to create an object,
// it should have at least 2-3 fields and 2-3 methods.
// Write a function accepting the object as a parameter and printing
// all its properties and their types

let object =
{
    name:"name1",
    surname:"surname1",
    yearOfBirth:2001,
    getAge: function(){return new Date().getFullYear()-2001;},
    getProbableEmail: function(){return name+surname+"@sth.country"}
};

function printObjAndTypes(obj)
{
    let properties = Object.keys(obj);
    console.log("Object:");
    for (let prop of properties)
    {
        console.log("\t" + prop + " ={ " + obj[prop] + "} of type " + typeof  obj[prop]);
    }
}

printObjAndTypes(object);
