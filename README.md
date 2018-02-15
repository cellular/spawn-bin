# spawn-bin

[![Build Status](https://travis-ci.org/cellular/spawn-bin.svg?branch=master)](https://travis-ci.org/cellular/spawn-bin) [![Greenkeeper badge](https://badges.greenkeeper.io/cellular/spawn-bin.svg)](https://greenkeeper.io/)
[![version](https://img.shields.io/npm/v/spawn-bin.svg)](http://npm.im/spawn-bin)

Spawns a new Node process that runs the bin file of a given package.

## API

### `spawnBin(bin, args, [opts])`

Same as API as [child_process.spawnSync](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options) with `bin` being [resolved](https://www.npmjs.com/package/resolve-bin) first.

If the name of the executable does not equal the package name you can use the format `<package>:<executable>`:

```js
spawnBin('flow-bin:flow', ['.']);
```

__Note:__ The `stdio` option is set to `'inherit'` by default.

# License

MIT