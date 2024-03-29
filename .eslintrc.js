module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'plugin:prettier/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'prettier'
	],
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		rules: {
			'prettier/prettier': [
				'error'
			]
		}
	}
};
