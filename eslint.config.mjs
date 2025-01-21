import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      'no-duplicate-imports': 'error',
      camelcase: 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-console': 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
];
