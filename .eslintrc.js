module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'filename-rules'],
  rules: {
    'filename-rules/match': ['error', /^[_a-z0-9-.[\]$]+(?:\..*)?$/],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
  },
}
