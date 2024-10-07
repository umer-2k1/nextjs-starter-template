import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

// This exports an ESLint configuration object
export default [
  // Apply these configurations to all JS/TS files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      globals: globals.browser, // Define global variables like window, document, etc.
    },
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      // Add ESLint and TypeScript recommended rules
      ...pluginJs.configs.recommended.rules,
      ...tsEslint.configs.recommended.rules,

      // Example rules for Prettier
      'prettier/prettier': 'error',
    },
  },
  // Special case for .js files only to treat them as script files instead of module files
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script', // Specifically for non-ESM JS files
    },
  },
];
