var MyAdvancedToken = artifacts.require("../build/contracts/MyAdvancedToken");
var owned = artifacts.require("../build/contracts/owned");
var token = artifacts.require("../build/contracts/token");
var tokenRecipient = artifacts.require("../build/contracts/tokenRecipient");

module.exports = function(deployer) {
  deployer.deploy(MyAdvancedToken);
  deployer.link(MyAdvancedToken, owned);
  deployer.deploy(owned);
  deployer.link(MyAdvancedToken, token);
  deployer.deploy(token);
  // deployer.link(token, tokenRecipient);
  // deployer.deploy(tokenRecipient);
};
