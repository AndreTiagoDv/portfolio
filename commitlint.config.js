module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Tipos permitidos para Conventional Commits
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
    // Comprimento mínimo e máximo do cabeçalho
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 100],
    // Escopo vazio permitido
    'scope-empty': [2, 'allow'],
  },
};
