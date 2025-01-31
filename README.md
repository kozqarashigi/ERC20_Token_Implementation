# Assignment 3 Part 1
## Team members:
- Nurgul Bassanova
- Ulzhan Tamyzgazina

## Contents



## ERC20 Token Implementation
# **Ulzhan_Nurgul Token (UN) - ERC-20 Implementation**

## **Project Overview**

This project implements an **ERC-20 token** named **Ulzhan_Nurgul (UN)** using Solidity. The contract is deployed on the **Ethereum test network (Sepolia or Ganache)** and includes additional functions to retrieve transaction details.

## **Installation & Deployment Guide**

### **1. Setup Environment**

- Use [Remix IDE](https://remix.ethereum.org/) for writing and deploying the smart contract.
- Connect **MetaMask** to **Sepolia Testnet** or **Ganache**.

### **2. Smart Contract Code**

Create a file **`MyToken.sol`** in Remix and paste the following Solidity code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UniversityToken is ERC20 {
    address public lastSender;
    address public lastReceiver;
    uint256 public lastTimestamp;

    constructor() ERC20("Ulzhan_Nurgul", "UN") {
        _mint(msg.sender, 2000 * 10**decimals());
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        lastSender = msg.sender;
        lastReceiver = recipient;
        lastTimestamp = block.timestamp;
        return super.transfer(recipient, amount);
    }

    function getLastTransactionTimestamp() public view returns (string memory) {
        return _formatTimestamp(lastTimestamp);
    }

    function getLastSender() public view returns (address) {
        return lastSender;
    }

    function getLastReceiver() public view returns (address) {
        return lastReceiver;
    }

    function _formatTimestamp(uint256 timestamp) internal pure returns (string memory) {
        return string(abi.encodePacked(timestamp));
    }
}
```

### **3. Compile the Contract**

- Open **Remix IDE** → Select Solidity version **0.8.20**.
- Click **Compile MyToken.sol**.

### **4. Deploy the Contract**

- Go to **Deploy & Run Transactions**.
- Select **Injected Provider - MetaMask** (for Sepolia) or **Ganache Provider**.
- Click **Deploy** and confirm the transaction in MetaMask.

### **5. Interacting with the Contract**

After deploying, use Remix to interact with the contract:

#### **Check Token Balance**

```solidity
balanceOf("your_address")
```

#### **Transfer Tokens**

```solidity
transfer("receiver_address", amount)
```

#### **Retrieve Transaction Details**

- **Last Transaction Timestamp:** `getLastTransactionTimestamp()`
- **Last Sender Address:** `getLastSender()`
- **Last Receiver Address:** `getLastReceiver()`

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

