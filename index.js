// @flow

const resolveBin = require('resolve-bin');
const cp = require('child_process');

module.exports = (
  bin /*: string */,
  args /*: ?string[] */,
  opts /*: ?Object */
) => {
  const [pkg, executable] = bin.split(':');
  const script = resolveBin.sync(pkg, { executable });
  return cp.spawnSync(
    process.argv[0],
    [script].concat(args || []),
    Object.assign({ stdio: 'inherit' }, opts)
  );
};
