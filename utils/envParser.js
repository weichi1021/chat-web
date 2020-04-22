const dotenv = require("dotenv");

const env = function(filePath) {
  var envParsed = (filePath)? dotenv.config({path: filePath}).parsed : {};
  var result = Object.keys(envParsed).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envParsed[next]);
    return prev;
  }, {});

  return result;
}

module.exports = env;