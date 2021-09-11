module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/essential',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended', // 添加 prettier 插件
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'linebreak-style': 0, // 在window和mac的结尾的换行符不同，记录一下
    'import/no-extraneous-dependencies': [
      'error',
      {
        // devDependencies: ['vite.config.ts']
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        proseWrap: 'preserve',
      },
    ],
  },
};
