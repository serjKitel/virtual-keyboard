module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
    ],
  },
};
