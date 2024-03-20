const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("News", (m) => {
  

  const lock = m.contract("News");

  return { lock };
});


//0xc3cCab5689A162D1c4C35bBCd15B56E7Ccab7A85
