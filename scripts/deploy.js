const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const MyToken = await hre.ethers.getContractFactory("UniversityToken");

    // Deploy the contract
    const myToken = await MyToken.deploy();

    // Wait for deployment to finish
    await myToken.waitForDeployment();

    console.log("MyToken deployed at:", myToken.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
