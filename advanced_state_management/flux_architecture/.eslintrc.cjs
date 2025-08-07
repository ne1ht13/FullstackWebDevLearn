module.exports = {
  root: true,
  env: { 
    browser: true,
    es2020: true,
    "jest/globals": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  plugins: ['react', 'jest'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
  }
}
