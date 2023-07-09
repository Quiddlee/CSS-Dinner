module.exports = {
  root: true,
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'import/no-import-module-exports': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
  },
};
