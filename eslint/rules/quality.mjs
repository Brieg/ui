import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default {
  files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],

  plugins: {
    'unused-imports': unusedImports,
    'simple-import-sort': simpleImportSort,
  },

  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'prefer-const': 'error',
    'object-shorthand': ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-var': 'error',
    'prefer-template': 'error',
    'no-debugger': 'error',
  },
};
