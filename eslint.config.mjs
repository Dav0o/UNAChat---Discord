import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginSecurity from 'eslint-plugin-security';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'commonjs',
		},
		plugins: {
			prettier: pluginPrettier,
			security: pluginSecurity,
		},
		rules: {
			'prettier/prettier': ['error', { singleQuote: true, semi: true, printWidth: 100 }],
			'security/detect-non-literal-fs-filename': 'warn',
			'security/detect-object-injection': 'error',
			'security/detect-eval-with-expression': 'warn',
		},
		ignores: ['test/**'],
	},
	{
		languageOptions: {
			globals: globals.node,
		},
		plugins: {
			prettier: pluginPrettier,
			security: pluginSecurity,
		},
		ignores: ['test/**'],
	},
	pluginJs.configs.recommended,
	eslintConfigPrettier,
];
