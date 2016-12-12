module.exports = {
  root: true,
  extends: 'airbnb/base',
  "env": {
    "node": true
  },
  "rules": {
    // allow trailing commas
    "comma-dangle": [2, "only-multiline"],
    "no-multi-spaces": [2, { exceptions: {
      "Property": true,
      "VariableDeclarator": true,
      "ImportDeclaration": true
    }}],
  }
}
