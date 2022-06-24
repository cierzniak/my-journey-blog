module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc-files --noEmit',
    'eslint --fix',
  ],
  '*.json': ['prettier --write'],
  '*.md': ['prettier --write --print-width 80 --prose-wrap always'],
  'yarn.lock': ['yarn-deduplicate'],
};
