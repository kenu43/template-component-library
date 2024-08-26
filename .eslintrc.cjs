module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'no-multi-spaces': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
  },
};
