const { ethers } = require("ethers")

const SmartContract = artifacts.require("JustContract")


module.exports = function(deployer) {
    deployer.deploy(SmartContract, ethers.utils.parseEther(0.05.toString()));
}