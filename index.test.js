const spawn = require('./index');

test('spawn', () => {
  const result = spawn('eslint', ['.']);
  expect(result).toHaveProperty('status', 0);
});

test('executable with different name', () => {
  const result = spawn('flow-bin:flow', ['.']);
  expect(result).toHaveProperty('status', 0);
});
