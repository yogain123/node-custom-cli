#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.log(`failed to execute command ${command}`, error);
    return false;
  }
  return true;
};

const repoName = "ddd" || process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/yogain123/Drum-Kit ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`cloning the repo with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

console.log("installing dependencies");

const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
  process.exit(1);
}

console.log("congratulation you are ready");
