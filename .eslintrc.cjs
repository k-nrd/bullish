module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    node: true, // for config files
  },
	plugins: [
    '@typescript-eslint', 
    'functional'
  ],
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic"
  ],
	rules: {
    'indent': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/indent': ['error', 2],
		'@typescript-eslint/func-call-spacing': ['error', 'always'],
		'space-before-function-paren': ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
	},
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
			rules: {
				'functional/no-let': 'off',
				'no-use-before-define': 'off'
			},
      env: { browser: true, node: false },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.js'],
      env: { browser: true, node: false },
    },
    {
      files: ['*.spec.ts'],
      env: { jest: true },
    },
  ],
};

