# spawn-bin

[![Build Status](https://travis-ci.org/fgnass/spawn-bin.svg?branch=master)](https://travis-ci.org/fgnass/spawn-bin) [![Greenkeeper badge](https://badges.greenkeeper.io/fgnass/spawn-bin.svg)](https://greenkeeper.io/)
[![version](https://img.shields.io/npm/v/spawn-bin.svg)](http://npm.im/spawn-bin)


Simple utility that combines [cross-spawn](https://www.npmjs.com/package/cross-spawn) and [resolve-bin](https://www.npmjs.com/package/resolve-bin).

## API

### `spawn.sync(bin, args, opts)`

Same as API as [child_process.spawnSync](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options) with `bin` being [resolved](https://www.npmjs.com/package/resolve-bin) first.

__Note:__ The `stdio` option is set to `'inherit'` by default.
