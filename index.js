const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

    // Function to prompt for Manager's information:
    function managerPrompt() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Manager's name here:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Manager's employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter Manager's email address:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter Manager's office number:",
            }
        ]);
    }

    // Function to prompt for Engineer's information
    function engineerPrompt() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Engineer's name here:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Engineer's employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer's email address:",
            },
            {
                type: "input",
                name: "github",
                message: "Enter Engineer's GitHub username:",
            }
        ]);
    }

    // Function for Intern's information
    function internPrompt() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Intern's name here:"
            },
            {
                type: "input",
                name: "id",
                message: "Enter Intern's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Intern's email address:",
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's School:",
            }
        ]);
    }

    // Function to begin the app
function appStartup() {
    const teamMembers = [];
    console.log("Welcome to the Team Profile Generator!");

    // Prompting for manager's info
    managerPrompt().then(managerInfo => {
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        teamMembers.push(manager);

        // Prompt user for next stage
        nextStage(teamMembers);
    }).catch(error => {
        console.error("Error:", error);
    });
}

    // Function to prompt user to take the next steps
    function nextStage(teamMembers) {
        inquirer.prompt([
            {
                type: "list",
                name: "choices",
                message: "What would you like to do next?",
                choices: ["Add an Engineer", "Add an Intern", "Finish building my team!"],
            },
        ]).then(({ choices }) => {
            const actions = {
                "Add an Engineer": () => {
                    engineerPrompt().then(engineerInfo => {
                        const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                        teamMembers.push(engineer);
                        nextStage(teamMembers);
                    });
                },
                "Add an Intern": () => {
                    internPrompt().then(internInfo => {
                        const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                        teamMembers.push(intern);
                        nextStage(teamMembers);
                    });
                },
                "Finish building my team!": () => {
                    const generateHTML = render(teamMembers);
                    if (!fs.existsSync(OUTPUT_DIR)) {
                        fs.mkdirSync(OUTPUT_DIR);
                    }
                    fs.writeFileSync(outputPath, generateHTML);
                    console.log(`Team profiles successfully generated! Please check ${outputPath}`);
                }
            };

            // Execute the action corresponding to the chosen choice
            actions[choices]();
        }).catch(error => {
            console.error("Error:", error);
        });
    }

    // Calling to start application
    appStartup();