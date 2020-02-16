console.clear();
let students = ["Usman", "Noman", "Ali"];
let naughtyStudents = ["Hareem", "Hania"];
naughtyStudents.push("HIba");
naughtyStudents.push(...students);
console.log(naughtyStudents);
