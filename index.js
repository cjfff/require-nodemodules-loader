const fs = require("fs");

module.exports = function(source) {
  source = source.replace(/requireNodeModules\(\'(.*)+\'\)/g, (_, key) => {
    return encodeURIComponent(fs.readFileSync(require.resolve(key)).toString());
  });

  this.callback(null, source);
};
