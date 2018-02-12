const spawn = require('./index');

test('spawn', () => {
  expect(spawn('eslint', ['.'])).status.toEqual(0);
});
