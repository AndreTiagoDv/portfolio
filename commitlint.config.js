// commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 100],
    // Permitir scope vazio
    'scope-empty': [2, 'always'], // ou [2, 'never'] para não permitir
  },
};
