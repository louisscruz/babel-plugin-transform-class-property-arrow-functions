const config = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
};

module.exports = config;
