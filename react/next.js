const baseConfig = require('./index');

module.exports = {
  ...baseConfig,
  "extends": [
    "plugin:@next/next/recommended",
    ...baseConfig.extends,
  ],
};
