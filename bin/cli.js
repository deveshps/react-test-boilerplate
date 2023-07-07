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
const gitCheckoutCommand = `git clone --depth 1 https://github.com/deveshps/react-test-boilerplate.git ${repoName}`;
// const gitCheckoutCommand2 = `git clone --depth 1 https://github.com/deveshps/react-test-boilerplate2.git ${repoName}`;


const installDepsCommand = `cd ${repoName} && npm install`;


console.log("Cloning the repository with name ",repoName);
const checkOut = runCommand(gitCheckoutCommand);
// const checkOut2 = runCommand(gitCheckoutCommand2);


if(!checkOut) process.exit(1); // (code : -1)
// if(!checkOut2) process.exit(1); // (code : -1)


console.log("Installing dependencies for ",repoName);

const installedDeps = runCommand(installDepsCommand);

if(!installDepsCommand) process.exit(1) // (code : -1)

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName} && npm start`);

//npm publish --access=public