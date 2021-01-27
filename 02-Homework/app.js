const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const html = require("./index")

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let ourStr = '';
let ourArray = [];

async function team(){
    try {
        await prompt ()

        for (let i = 0; i < ourArray.length; i++) {
            ourStr = ourStr + html.generateCard(ourArray[i]);
        }
        let ourHTML = html.generateHTML(ourStr) 

        writeFileAsync("./index/index.htmlno", ourHTML)
    } 
    catch (err) {
        return console.log(err);
    }
};

async function prompt(){
    let finalResponse = "";

    do {
        try {
            response = await inquirer.prompt([

                {
                    type: "input",
                    name: "name",
                    message: "Employee name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Employee id?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Employee email?"
                },
                {
                    type: "list",
                    name: "role",
                    message: "Role of employee?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = "";

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Input the employee's github username"
                }, ]);

                const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                ourArray.push(ngineer);
            } else if (response.role === "Intern"){
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What school did this employee attend?",
                },
                ]);
                const intern = new Intern(response.name, response.id, response.email, response2.x);
                ourArray.push(intern);
            }  else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Which office space number belongs to the employee?"
                }, ]);
                const manager = new Manager(response.name, response.id, response.email, response2.x);
                ourArray.push(manager);
            }
            } catch (err) {
                return console.log(err);
        }
        finalResponse = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you wish to add more employees?" ,
            choices: [ 
                "Yes",
                "No"
            ]
        }, ]);
    } while (finalResponse.finish === "Yes");l
}
team();