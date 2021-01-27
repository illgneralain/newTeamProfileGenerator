const employee = require("./employee")

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }

    getSchool(){
        return this.school
    }
}

module.exports = intern; 