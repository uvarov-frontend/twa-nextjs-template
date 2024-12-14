import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      prettier: prettierPlugin,
    },
  },
  {
    files: ['**/*.{mjs,ts,tsx}'],
  },
  {
    ignores: ['node_modules', '.next'],
  },
  {
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-extra-boolean-cast': 'off',
      'arrow-parens': ['error', 'always'],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^antd'], ['^@?\\w'], ['~/(.*)', '@/(.*)'], ['^[./]']],
        },
      ],
    },
  },
];

export default eslintConfig;
