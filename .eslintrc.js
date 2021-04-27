module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'arrow-body-style': 'off',
    'indent': 'off',
    'quote-props': 'off',
    'react/jsx-indent': 'off',
    'semi': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'array-callback-return': 'off',
    'react/no-array-index-key': 'off',
  },
};
