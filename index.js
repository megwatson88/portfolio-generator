//external packages 
const fs = require('fs');
const inquirer = require('inquirer');

function generateName(firstName) {
	return `# Hello, ${firstName}!\n\n`;
}

function generateProjectTitle(projectTitle) {
	return `##  ${projectTitle}.\n\n`;
}
function generateDescription(projectDescription){
    return `## Descrption ${projectDescription}`
};
function generateInstallationInstructions(projectInstall){
    return `## Instalation Instructions ${projectInstall}`
};
function generateUsage(projectUsage){
    return `## Usage Instructions ${projectUsage}`
};
inquirer
	.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your email'
        },
		{
			type: 'input',
			name: 'username',
			message: 'What is your github username?',
		},
        {
            type:'input',
            name:'repo name',
            message: 'What is the name of the repo?'
        },
		{
			type: 'input',
			name: 'projectname',
			message: 'What is the title of your project?',
		},
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief descption of your project.'
        },
        {
            type:'input',
            name:'installation',
            message: 'Please provide directions for installation of your app.'
        },
        {
            type:'input',
            name:'usage',
            message: 'Please provide usage directions for this project.'
        },
        {
            type:'input',
            name:'contributing',
            message: 'Do you have an contributors working on this project with'
        },
        {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
	])

	.then(answers => {
		console.log(answers);

		let result = '';
		result += generateName(answers.name);
		result += generateProjectTitle(answers.projectname);
        result += generateDescription(answers.description);
        result += generateInstallationInstructions(answers.installation);
        result += generateUsage(answers.usage);
        result += 

		fs.writeFile('about.md', result, err => {
			if (err) return err;

			console.log('File created!');
		});

	});
