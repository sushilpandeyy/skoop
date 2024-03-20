const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("News", (m) => {
  

  const lock = m.contract("News");

  return { lock };
});
