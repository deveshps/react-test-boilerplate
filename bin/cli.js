#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`,{stdio:"inherit"});
    } catch(e) {
        console.error(`Failed to execute ${command}`,e)
        return false
    }
    return true
}

const repoName = process.argv[2];
const secondRepoName = process?.argv[3] || "react-test-boilerplate2";

const gitCheckoutCommand = `git clone --depth 1 https://github.com/deveshps/react-test-boilerplate.git ${repoName}`;
const gitCheckoutCommand2 = `git clone --depth 1 https://github.com/deveshps/react-test-boilerplate2.git ${secondRepoName}`;


const installDepsCommand = `cd ${repoName} && npm install`;

const installDepsCommand2 = `cd ${secondRepoName} && npm install`;



console.log("Cloning the repository with name ",repoName,secondRepoName);
const checkOut = runCommand(gitCheckoutCommand);
const checkOut2 = runCommand(gitCheckoutCommand2);


if(!checkOut || !checkOut2) process.exit(1); // (code : -1)
// if(!checkOut2) process.exit(1); // (code : -1)


console.log("Installing dependencies for ",repoName);

const installedDeps = runCommand(installDepsCommand);
const installedDeps2 = runCommand(installDepsCommand2)

if(!installDepsCommand || !installDepsCommand2) process.exit(1) // (code : -1)

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName} && npm start`);
console.log(`cd ${secondRepoName} && npm start`);


//npm publish --access=public