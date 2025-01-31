// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UniversityToken is ERC20 {
    address public owner;

    constructor(address _owner) ERC20("UniversityToken", "UT") {
        owner = _owner;
        _mint(_owner, 1000 * 10 ** decimals()); // Mint initial supply to owner
    }
}
