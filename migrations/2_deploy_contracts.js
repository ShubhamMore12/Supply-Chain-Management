const voting = artifacts.require("voting")

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(voting)
    const v = await voting.deployed()
}