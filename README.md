# Team Profile Generator

## Description 

The Team Profile Generator is a command-line application designed to streamline the process of generating a webpage that displays essential information about a software engineering team. This application allows managers to quickly gather and input information about team members, including their names, IDs, email addresses, and specific roles (such as Manager, Engineer, or Intern).

Utilising Node.js, Inquirer for user input, and Jest for unit testing, the application offers a seamless user experience. Upon running the application with the command node index.js, the user is guided through a series of prompts to input information about the team manager, engineers, and interns. Once all information is provided, the application generates an HTML webpage that neatly organises and displays the team's information.

A sample HTML page can be found here: 
https://github.com/eaton-mess/Team-Profile-Generator/blob/main/output/team.html

## Table of Contents 

* [Usage](#usage)
* [Author](#author)
* [Acknowledgements](#acknowledgements)
* [License](#license)

## Usage 

1. Installation:

Clone the GitHub repository or download the project files to your local machine.
Ensure you have Node.js installed on your system.

2. Setup:

Open your terminal or command prompt.
Navigate to the directory where the project is located.

3. Installation of Dependencies:

Run npm install to install the necessary dependencies, including Inquirer for user input and Jest for testing.

4. Running the Application:

Once the dependencies are installed, run the application by entering node index.js in the terminal.

5. Input Gathering:

Follow the prompts displayed in the terminal to input information about the team members.
Start by entering details about the team manager, including their name, employee ID, email address, and office number.

6. Adding Team Members:

After entering the manager's information, you'll be presented with a menu offering options to add an engineer, add an intern, or finish building the team.
Select the appropriate option to add an engineer or intern to the team.
Provide the necessary information for each additional team member, such as name, ID, email, and role-specific details (GitHub username for engineers, school for interns).

7. Generating the HTML Page:

Once you've finished adding team members, select the option to finish building the team.
The application will generate an HTML webpage containing summaries for each team member.
The HTML page will be saved in the output folder as team.html.

8. Review and Share:

Open the generated team.html file in a web browser to review the team's information.
Share the HTML page with relevant team members as needed.

9. Testing:

Optionally, run the provided tests using Jest to ensure that all classes and methods pass the test cases.
Run npm test in the terminal to execute the tests.

![alt text](https://github.com/eaton-mess/Team-Profile-Generator/blob/main/assets/example%20gif.gif)

## Author

Lauren Eaton
https://github.com/eaton-mess

## Acknowledgements

Jest Tutorial for Beginners: Valentino Gagliardi: https://www.valentinog.com/blog/jest/<br>
Jest Tutorial, JavaScript Unit Testing: https://www.softwaretestinghelp.com/jest-testing-tutorial/

## License

Licensed under MIT.

## Badges

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
