let CryptographyAssistant = require('../assistants').CryptographyAssistant;
const User = require('../../../models').User;

module.exports.findByEmail = async function(email) {
  return User.findOne({
    where: {email: email, isActive: 1}
  });
};

module.exports.create = async function(accountData, transaction) {
  accountData.salt = CryptographyAssistant.generateRandomString(100);
  accountData.encryptedPassword = CryptographyAssistant.encryptWithSHA2(
    accountData.password + accountData.salt
  );
  accountData.isActive = 1;
  return User.create(accountData, {transaction: transaction});
};
