# Assignment 3 Part 1
## Team members:
- Nurgul Bassanova
- Ulzhan Tamyzgazina

## Contents

## Set Up and Installation

### Setting up the environment
Installing Hardhat using the Node.js package manager (npm), which is both a package manager and an online repository for JavaScript code.
```bash
npm init -y
```

Initializing an npm project as shown below:
```bash
npm init
```

Now Hardhat can be installed:
```bash
npm install --save-dev hardhat
```

In the same directory where you installed Hardhat run:
```bash
npx hardhat init
```

Selecting Create an empty hardhat.config.js from the the output:
```bash
$ npx hardhat init
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.22.18 👷‍

? What do you want to do? …
  Create a JavaScript project
  Create a TypeScript project
  Create a TypeScript project (with Viem)
❯ Create an empty hardhat.config.js
  Quit
```
When Hardhat is run, it searches for the closest hardhat.config.js file starting from the current working directory.

