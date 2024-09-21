import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['main.js', 'version-bump.mjs', 'node_modules/**'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked.map(config => ({
		...config,
		files: ['src/**/*.ts'],
	})),
	{
		files: ['src/**/*.ts'],
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'no-mixed-spaces-and-tabs': 'error',
			'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
			'func-style': ['error', 'expression', { allowArrowFunctions: true }],
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-floating-promises': [
				'warn',
				{ ignoreVoid: true, ignoreIIFE: true },
			],
			'@typescript-eslint/no-namespace': 'warn',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
				'warn',
				{
					allowComparingNullableBooleansToTrue: true,
					allowComparingNullableBooleansToFalse: true,
				},
			],
			'@typescript-eslint/no-explicit-any': [
				'error',
				{ fixToUnknown: true, ignoreRestArgs: false },
			],
			'@typescript-eslint/prefer-optional-chain': 'warn',
			'@typescript-eslint/promise-function-async': [
				'error',
				{
					allowedPromiseNames: ['Thenable'],
					checkArrowFunctions: true,
					checkFunctionDeclarations: true,
					checkFunctionExpressions: true,
					checkMethodDeclarations: true,
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['snake_case'],
					prefix: ['is_', 'should_', 'has_', 'can_', 'did_', 'will_'],
				},
				{ selector: 'function', format: ['snake_case', 'PascalCase'] },
				{
					selector: 'variable',
					types: ['function'],
					format: ['snake_case', 'PascalCase'],
				},
				{ selector: 'variableLike', format: ['snake_case', 'UPPER_CASE'] },
				{
					selector: 'parameter',
					format: ['snake_case'],
					leadingUnderscore: 'allow',
				},
				{ selector: 'typeLike', format: ['PascalCase'] },
			],
		},
	},
	{
		files: ['**/*.js'],
		...tseslint.configs.disableTypeChecked,
	}
)
