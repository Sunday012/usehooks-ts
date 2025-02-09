module.exports = {
  extends: ['custom'],
  overrides: [
    // Track tree-shaking potential error in the lib
    {
      files: ['./src/**/!(*.test|*.spec).ts'],
      plugins: ['tree-shaking'],
      rules: {
        'tree-shaking/no-side-effects-in-initialization': 2,
      },
    },
  ],
  ignorePatterns: ['./dist', './node_modules', './turbo'],
}
