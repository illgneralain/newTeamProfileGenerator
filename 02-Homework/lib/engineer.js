const employee = require("./employee")

class engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }
}

module.exports = engineer;