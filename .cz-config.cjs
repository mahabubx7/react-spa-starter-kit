module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat:\tAdding a new feature' },
    { value: ':bug: fix', name: '🐛 fix:\tFixing a bug' },
    { value: ':memo: docs', name: '📝 docs:\tAdd or update documentation' },
    {
      value: ':lipstick: style',
      name: '💄 style:\tAdd or update styles, ui or ux',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor:\tCode change that neither fixes a bug nor adds a feature',
    },
    {
      value: ':wrench: feat',
      name: '🔧 packages:\tAdded new packages to work next',
    },
    {
      value: ':bricks: feat',
      name: '🧱 component:\tAdded new components',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance',
    },
    {
      value: ':test_tube: test',
      name: '🧪 test:\tAdding tests cases',
    },
    {
      value: ':truck: chore',
      name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
    },
    { value: ':rewind: revert', name: '⏪️ revert:\tRevert to a commit' },
    { value: ':construction: wip', name: '🚧 wip:\tWork in progress' },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tAdd or update regards to build process',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci:\tAdd or update regards to build process',
    },
    {
      value: ':zap: feat',
      name: '⚡️ initial:\tAdded starter initial configurations',
    },
  ],

  scopes: [
    { name: 'ui' },
    { name: 'android' },
    { name: 'ios' },
    { name: 'home' },
    { name: 'planner' },
    { name: 'settings' },
    { name: 'component' },
    { name: 'utils' },
    { name: 'unit' },
    { name: 'setup' },
    { name: 'tweak' },
  ],

  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'test' },
      { name: 'hotfix' },
      { name: 'docs' },
      { name: 'tweak' },
    ],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  subjectLimit: 100,
}
