const spawn = require('./index');

test('spawn', () => {
  const result = spawn('eslint', ['.']);
  expect(result).toHaveProperty('status', 0);
});
