const employee = require("./employee")

class manager extends employee {
    constructor(name, id, email, officeSpace){
        super(name, id, email);
        this.title = "Manager";
        this.officeSpace = officeSpace;
    }

    getofficeSpace() {
        return this.officeSpace;
    }
    
}

module.exports = manager;