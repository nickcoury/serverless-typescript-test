const _ = require('lodash');

module.exports.getMessage = async function() {
  return await Promise((resolve, reject) => {
    resolve(_.join(['Test', 'message.'], ' '));
  });
};
