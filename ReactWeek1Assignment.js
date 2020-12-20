class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level, students =[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === studentToRegister.email).length) {
            console.log("Student is already registered.");
        } else {
         this.students.push(studentToRegister);
         console.log(`Registering ${this.email} to the bootcamp Web Dev Fundamentals.`);
        }
        return this.students;
        }
    
}