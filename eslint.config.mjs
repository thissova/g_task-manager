import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    root: true,
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['eslint/recommended', 'prettier'],
    languageOptions: { globals: globals.browser },
  },
]);
