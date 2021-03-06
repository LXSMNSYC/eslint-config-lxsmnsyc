module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": ['.js'],
      },
    },
  },
  "plugins": [
    "import",
  ],
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
      }
    ],
    "import/no-unresolved": "error",
  },
}