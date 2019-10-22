module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'feat', 'fix', 'perf', 'refact', 'revert', 'test', 'config', 'infra', 'doc'],
    ],
  },
}
