const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniversityToken", function () {
  let UniversityToken, universityToken, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    UniversityToken = await ethers.getContractFactory("UniversityToken");
    universityToken = await UniversityToken.deploy();
  });

  it("Should have correct name and symbol", async function () {
    expect(await universityToken.name()).to.equal("Ulzhan_Nurgul");
    expect(await universityToken.symbol()).to.equal("UN");
  });

  it("Should assign initial supply to owner", async function () {
    const ownerBalance = await universityToken.balanceOf(owner.address);
    expect(await universityToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens between accounts", async function () {
    await universityToken.transfer(addr1.address, 50);
    expect(await universityToken.balanceOf(addr1.address)).to.equal(50);
  });

  it("Should fail if sender doesn’t have enough balance", async function () {
    await expect(universityToken.connect(addr1).transfer(addr2.address, 100))
  .to.be.reverted;
  });

  it("Should approve and allow spending of tokens", async function () {
    await universityToken.approve(addr1.address, 100);
    expect(await universityToken.allowance(owner.address, addr1.address)).to.equal(100);
  });

  it("Should allow an approved address to transfer on behalf", async function () {
    await universityToken.approve(addr1.address, 100);
    await universityToken.connect(addr1).transferFrom(owner.address, addr2.address, 50);
    expect(await universityToken.balanceOf(addr2.address)).to.equal(50);
  });
});