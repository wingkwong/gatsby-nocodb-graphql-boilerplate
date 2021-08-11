module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'arrow-body-style': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['lib', './src/lib'],
          ['styles', './src/styles'],
          ['types', './src/types'],
        ],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },
};
