import { FlatCompat } from '@eslint/eslintrc'
import eslintParserAstro from 'astro-eslint-parser'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginTypeScript from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default defineFlatConfig([
  {
    ignores: ['dist/', '.astro/', 'src/env.d.ts']
  },
  ...compat.extends('eslint-config-standard'),
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist
    },
    rules: {
      ...eslintPluginPerfectionist.configs['recommended-alphabetical'].rules
    }
  },
  {
    files: ['**/*.ts', '**/*.astro'],
    languageOptions: {
      parser: eslintPluginTypeScript.parser,
      parserOptions: {
        project: true
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript.plugin
    },
    rules: {
      ...eslintPluginTypeScript.configs.recommended.rules,
      'no-unused-vars': 'off'
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintParserAstro,
      parserOptions: {
        parser: eslintPluginTypeScript.parser,
        project: true
      }
    },
    plugins: {
      astro: eslintPluginAstro
    },
    rules: {
      ...eslintPluginAstro.configs['flat/recommended'].rules
    }
  }
])
